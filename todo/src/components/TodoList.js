import React from 'react'
import Todo from "../components/Todo"

export default function TodoList(props) {
    const handleClick = () => {
        props.handleClearItems();
    }
    return (
        <div>
           
            <p>{/*console.log(props)*/}</p>
            <p>{props.listItems.map((item)=>
                (
                <Todo item={item} handleToggleItem={props.handleToggleItem}  />
            ))}</p>
            <button onclick={handleClick}>Clear Completed Todos</button>
        </div>
    )
}
