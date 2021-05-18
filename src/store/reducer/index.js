import { combineReducers } from '@reduxjs/toolkit'
import { userReducer } from "../slice/user/user";


const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer;