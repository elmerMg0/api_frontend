import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, persistLocalStorage } from "../../utilities/localStorage.utility";
const initialState = {
    username: '',
    accessToken: '',
}

export const UserKey = 'user';
const userSlice = createSlice( {
    name: 'user',
    initialState: localStorage.getItem(UserKey) ? JSON.parse(localStorage.getItem(UserKey)) : initialState,
    reducers: {
        createUser: (state, action) => {
            state.username = action.payload.username;
            state.accessToken = action.payload.accessToken;
            //state = { ...state, ...action.payload}
            persistLocalStorage(UserKey , state)
            //return action.payload;
        }, 
        updateUser: ( state, action) => {

        } ,
        deleteUser: (state, action) => {

        }
       }
})

export const { createUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer; 