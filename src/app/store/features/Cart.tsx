
import { Cart } from '@/app/utils/types'
import { createSlice } from '@reduxjs/toolkit'


// Define the initial state using that type
const initialState: Cart[] = []
export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   addToCart(state,action){
    let uID=Math.floor(1000+Math.random()*9000)
let newObj= {...action.payload,uID}
state.push(newObj)
   },
   deleteItem(state,{payload}){
    return state.filter((val)=>val.uId !== payload)
    },
    addCart(state,action){
      let obj = state.find  ((val)=>
      val.id == action.payload.id &&
      val.color == action.payload.color &&
      val.size == action.payload.size) ;
      if(obj){
        ++obj.quantity;
        let newState= state.filter((val)=>val.id !== obj?.id)
        state= [...newState,obj];
        return;
      }
    },
    subtractCart(state,action){
      let obj = state.find  ((val)=>
      val.id == action.payload.id &&
      val.color == action.payload.color &&
      val.size == action.payload.size) ;
      if(obj !== undefined){
       if(obj.quantity<=1){
        return state.filter((val)=>val.uId !== obj?.uId)
       }
       --obj.quantity;
       let newState= state.filter((val)=>val.uId!== obj?.uId)
       state =[...newState,obj];
       return;
      }
    }
  
  },
 
})

export const { addToCart, deleteItem, addCart , subtractCart} = cartSlice.actions


export default cartSlice.reducer