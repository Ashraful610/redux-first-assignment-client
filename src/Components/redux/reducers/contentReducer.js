import { ADD_CONTENT } from "../actionsTypes/actionsTypes";

const initialState = {
    cart:[],
} ;
                
const contentReducer = (state = initialState, action) => {
   switch(action.type) {   
    case ADD_CONTENT:                       
       return {     
          ...state , 
        cart:[...state.cart , action.payload]         
      }
    default:
        return state
   }
}

export default contentReducer ;   