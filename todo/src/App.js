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
  const handleToggleItem = (itemId)=>{
    // console.log(actions.toggleTodo(itemId))
    // console.log()
    dispatch(actions.toggleTodo(itemId))
  }
  const clearItems = () =>{
    dispatch(actions.clearTodo)
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm handleAddTodo={addItem}/>
      <TodoList listItems={state} handleToggleItem={handleToggleItem} handleClearItems={clearItems} />
      
    </div>
  )
}
