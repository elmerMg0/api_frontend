import { configureStore } from "@reduxjs/toolkit";
import dashboardSliceReducer from '../redux/states/dashboard'
import carritoSliceReducer from '../redux/states/carrito'
export default configureStore({
    reducer: {
        dashboard: dashboardSliceReducer,
        carrito: carritoSliceReducer,
    }
})