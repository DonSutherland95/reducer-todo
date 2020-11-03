export const ADD_TODO = "ADD_ITEM"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const CLEAR_COMPLETED = "CLEAR_COMPLETED"

const addTodo = (todo)=>{
    return({type:ADD_TODO, payload:todo})
}

const toggleTodo = (id)=>{
    return({type:TOGGLE_TODO, payload:id})
}

const clearCompleted = ()=>{
    return({type:CLEAR_COMPLETED,})
}

export default{
    addTodo,
    toggleTodo,
    clearCompleted
}