import { takeLatest, put, call } from "redux-saga/effects";
import { deleteUser, fetchUsers } from "../../../api/Api";
import { userActions } from "../../slice/user/user";


const handleGetUsersRequest = function*() {
  try {
    const {data} = yield call(fetchUsers);
    yield put(userActions.getUsersSuccess(data));
  } catch (error) {
    yield put(userActions.getUsersFailure(error))
  }
}

const handleDeleteUser = function*({payload}){
  try {
    yield call(deleteUser, payload);
    yield put(userActions.deleteUserSuccess(payload))
  } catch (error) {
    yield put(userActions.deleteUserFailure(error))
  }
}


export default function* userSaga() {
  yield takeLatest(userActions.getUsersRequest.type, handleGetUsersRequest );
  yield takeLatest(userActions.deleteUser.type, handleDeleteUser);
}
