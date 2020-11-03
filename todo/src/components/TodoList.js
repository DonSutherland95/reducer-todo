import React from 'react'
import Todo from "../components/Todo"

export default function TodoList(props) {
    return (
        <div>
            <h1>TodoList</h1>
            <p>{/*console.log(props)*/}</p>
            <p>{props.listItems.map((item)=>
                (
                <Todo item={item}  />
            ))}</p>
        </div>
    )
}
