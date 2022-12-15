import { ADD_CONTENT, ALL_CONTENT } from "../actionsTypes/actionsTypes";

const initialState = {
    contents:[],
} ;
                
const contentReducer = (state = initialState, action) => {
   switch(action.type) {   
    case ALL_CONTENT:                       
       return {     
          ...state , 
        contents:[...state.contents , action.payload]         
      }
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