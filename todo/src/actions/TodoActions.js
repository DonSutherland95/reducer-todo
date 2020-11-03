export const ADD_TODO = "ADD_ITEM"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const CLEAR_TODO = "CLEAR_TODO"

const addTodo = (todo)=>{
    return({type:ADD_TODO, payload:todo})
}

const toggleTodo = (id)=>{
    return({type:TOGGLE_TODO, payload:id})
}

const clearTodo = ()=>{
    return({type:CLEAR_TODO,})
}

export default{
    addTodo,
    toggleTodo,
    clearTodo
}