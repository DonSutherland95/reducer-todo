import {ADD_TODO, TOGGLE_TODO, CLEAR_COMPLETED} from "../actions/TodoActions"

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]


export const reducer = (state, action) =>{
    switch(action.type){
        case ADD_TODO:
            const  newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            // return [
            //     ...state, newTodo, console.log(state)
            // ]
            return [
                ...state, newTodo
            ]
            
        default:
            return(state)
    }
}