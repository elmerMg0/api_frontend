import { createSlice } from '@reduxjs/toolkit';

const initialState = { orderDetail: []} 
const carritoSlice = createSlice({
    name: 'carrito',
    initialState: localStorage.getItem('carrito') ? localStorage.getItem('carrito') : initialState,
    reducers: {
        createCarrito: (state, action ) => {
            localStorage.setItem('carrito', action.payload);
            return action.payload;
        },
        updateCarrito: (state, action ) => {
            console.log(action.payload)
            //const updated = [...state.orderDetail, action.payload]
            //localStorage.setItem('carrito', updated)
            //return updated;
        }
    }
})

export const { createCarrito, updateCarrito } = carritoSlice.actions;
export default carritoSlice.reducer;