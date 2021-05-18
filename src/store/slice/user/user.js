import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    users: [],
    loading: false,
    error: '',
};

const getUsersRequest = (state) => {
    state.loading = true;
}
const getUsersSuccess = (state, {payload}) => {
    state.loading = false
    state.users = payload;
}
const getUsersFailure = (state, {payload}) => {
    state.loading = false;
    state.error = payload;
}


const deleteUser = (state, {payload}) => {
}
const deleteUserSuccess = (state, {payload}) => {
    console.log(payload);
    console.log(state.users.filter((user) => user.id !== payload));
}
const deleteUserFailure = (state, {payload}) => {
    state.error = payload
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUsersRequest,
        getUsersSuccess,
        getUsersFailure,
        deleteUser,
        deleteUserSuccess,
        deleteUserFailure
    }
})

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;