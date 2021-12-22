import React from 'react'
import {v4 as uuid} from 'uuid'
import axios from 'axios'
import {getTodo} from '../redux/action.js'
import {useDispatch} from 'react-redux'
function TodoInput() {

    const [state,setState] = React.useState("")
    const dispatch = useDispatch()

    function handleChange(e){
        setState(e.target.value)
    }

    async function handleAdd(){
        const data = {
            id:uuid(),
            status:false,
            title:state
        }
        const payload = {
            method:'post',
            data:data,
            url:'http://localhost:3001/post'
        }

        await axios(payload)
        dispatch(getTodo())
        alert("Success")

    }
    return (
        <div>
            <span>Enter Todo : </span>
            <input type="text" value = {state} onChange={(e) => handleChange(e)} placeholder="Enter Something"/>
            <button onClick={handleAdd}>ADD</button>
        </div>
    )
}

export default TodoInput
