import {ADD_TODO, TOGGLE_TODO, CLEAR_TODO} from "../actions/TodoActions"

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
            return [
                ...state, newTodo
            ]
        case TOGGLE_TODO:
            return state.map((item)=>{
                    if(action.payload === item.id ){
                        // console.log(action.payload, item.id)
                    return {
                        ...item, completed: !item.completed
                    } 
                } else {
                    return item
                }
            })
        case CLEAR_TODO:
            console.log(action.payload)
            return state.filter((item)=> !item.completed)

        default:
            return(state)
    }
}