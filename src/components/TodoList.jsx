import React from 'react'
import {getTodo} from '../redux/action.js'
import {useSelector,useDispatch} from 'react-redux'

function TodoList() {
    const dispatch = useDispatch()

    const todos = useSelector(state => state.reducerFetch.items)

    React.useEffect(() => {
        dispatch(getTodo())
    },[])
    return (
        <div>
            {todos.map((todo) => {
                return(
                    <h3 key={todo.id}>{todo.title}</h3>
                )
            })}
        </div>
    )
}

export default TodoList
