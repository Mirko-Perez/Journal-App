import { types } from "../types/types";


const initialState = {
    loading:false,
    msgErrors: null
} 



export const uiReducer = ( state = initialState , action) => {

    switch (action.type) {
        case types.uiSetErrors:
            
            return {
                ...state,
                msgErrors: action.payload,
            }
        
        case types.uiRemoveErrors:
        
            return {
                ...state,
                msgErrors: null,
            }
        
        case types.uiStartLoading:
    
            return {
                ...state,
                loading:true,
            }

        case types.uiFinishLoading:

            return {
                ...state,
                loading:false,
            }
    
        default:
            return state;
    }

}
