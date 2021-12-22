import { GET_TODOS_SUCCESS,GET_TODOS_FAILURE,GET_TODOS_REQUEST } from "./actionType.js"
import axios from 'axios'

export const getTodo = () => async(dispatch,getState) => {
    dispatch({
        type:GET_TODOS_REQUEST
    })
    const payload = {
        type:'get',
        url:`http://localhost:3001/post`
    }
    try {
        const {data} = await axios(payload)
        dispatch({
            type:GET_TODOS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:GET_TODOS_FAILURE,
            error:error
        })
    }
}
