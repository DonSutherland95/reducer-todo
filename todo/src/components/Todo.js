import React from 'react'

export default function todo(props) {

    const handleClick = () =>{
        props.handleToggleItem(props.item.id)
        
        // console.log(props.item.id)
    }
    return (
        <div onClick={handleClick} className={props.item.completed === true ? 'completed': '' }>
            <p>{props.item.item}</p>
            <p>{/*console.log(props.item.item)*/}</p>
        </div>
    )
}
