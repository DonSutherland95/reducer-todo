import React from 'react'

export default function todo(props) {
    return (
        <div>
            <p>{props.item.item}</p>
            <p>{/*console.log(props.item.item)*/}</p>
        </div>
    )
}
