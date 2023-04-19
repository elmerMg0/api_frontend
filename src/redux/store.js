import { configureStore } from "@reduxjs/toolkit";
import dashboardSliceReducer from '../redux/states/dashboard'
import carritoSliceReducer from '../redux/states/carrito'
import userSliceReducer from '../redux/states/user'
export default configureStore({
    reducer: {
        dashboard: dashboardSliceReducer,
        carrito: carritoSliceReducer,
        user: userSliceReducer
    }
})