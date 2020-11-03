import React, {useReducer} from 'react'
import {initialState, reducer} from "./reducers/TodoReducer"
import actions from "./actions/TodoActions"
import TodoList from "./components/TodoList"
import TodoForm from './components/TodoForm';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (todo) =>{
    dispatch(actions.addTodo(todo))
    // console.log(todo)
  }
  
  return (
    <div>
      <TodoList listItems={state} />
      <TodoForm handleAddTodo={addItem}/>
    </div>
  )
}
