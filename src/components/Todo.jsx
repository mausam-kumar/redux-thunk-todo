import React from 'react'
import TodoInput from './TodoInput.jsx'
import TodoList from './TodoList.jsx'

function Todo() {
    return (
        <div>
            <TodoInput style={{margin:"20px"}} />
            <TodoList style={{margin:"20px"}} />
        </div>
    )
}

export default Todo
