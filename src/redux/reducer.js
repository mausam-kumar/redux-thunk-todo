import { GET_TODOS_SUCCESS,GET_TODOS_FAILURE,GET_TODOS_REQUEST } from "./actionType.js"

const initState = {
    isLoading: true,
    error: false,
    items: []
}

export const reducerFetch = (state=initState, {type,payload}) =>{
    switch (type) {
        case GET_TODOS_REQUEST:
            
            return{
                ...state,
                isLoading:true,
                error:false
            }
        case GET_TODOS_SUCCESS:
            
            return{
                ...state,
                isLoading:false,
                items:payload
            }
        case GET_TODOS_FAILURE:
            
            return{
                ...state,
                isLoading:false,
                items:[],
                error:true
            }
    
        default:
            return state;
    }
}