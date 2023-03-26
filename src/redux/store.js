import { configureStore } from "@reduxjs/toolkit";
import dashboardSliceReducer from '../redux/states/dashboard'
export default configureStore({
    reducer: {
        dashboard: dashboardSliceReducer
    }
})