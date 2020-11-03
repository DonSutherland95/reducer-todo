import React, {useState} from 'react'


const initialForm = {
        item: "",
        /*id:Date.now(),
        finished:false,*/
    }
export default function TodoForm(props) {
    const [form, setForm] = useState(initialForm)

    const handleChanges = e =>{
       const {name, value} = e.target
       setForm({...form, [name]:value})
    } 
    const handleSubmit = e =>{
        e.preventDefault();
        props.handleAddTodo(form.item)
        // console.log(form.item)
        setForm(initialForm)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="item" onChange={handleChanges} value={form.item}/>
            <button>Add Todo</button>
        </form>
    )
}
