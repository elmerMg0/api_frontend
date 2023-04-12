import { createSlice } from '@reduxjs/toolkit';

const initialState = { orderDetail: []} 
const carritoSlice = createSlice({
    name: 'carrito',
    initialState: localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : initialState,
    reducers: {
        createCarrito: (state, action ) => {
            
            localStorage.setItem('carrito', JSON.stringify([...action.payload]));
            return action.payload;
        },
        updateCarrito: (state, action ) => {
            if( state.orderDetail === undefined){
                localStorage.setItem('carrito', JSON.stringify([...action.payload]));
            }else{
                console.log('no undenifedss')
            }
           /*  let exists = state.orderDetail.some( prod => prod.id === product.id)
            if(exists){
                state.orderDetail.map( prod => {
                    if(prod.id === product.id){
                        prod.cantidad += 1;
                    }
                })
            }else{
                product.cantidad = 1;
                state.orderDetail = [ ...state.orderDetail, product];
                localStorage.setItem('carrito', state.orderDetail)
            } */
            //state.orderDetail = action.payload;
            //console.log(action.payload)
            //const updated = [...state.orderDetail, action.payload]
            //return updated;
            return action.payload;  
        }
    }
})

export const { createCarrito, updateCarrito } = carritoSlice.actions;
export default carritoSlice.reducer;