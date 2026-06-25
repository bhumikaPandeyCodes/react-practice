import { useRef, useState } from 'react'
import { useReducer } from 'react'
import { todoReducer, type Todo } from '../../reducers/todo'
const TodoTaskManager = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [todos,dispatch] = useReducer(todoReducer,[])
    const [isEdit,setIsEdit] = useState()
    const [edit,setEdit] = useState("")

  return (
    <div>
        <h1>welcome to todo</h1>
      <input type='text' placeholder='new task' ref={inputRef}/>
      <button onClick={()=>dispatch({type:"ADD", payload:inputRef.current?.value})}>Add todo</button>
      <h2>todos - </h2>
      {todos.map((todo)=>{
        return <li key={todo.id}>
            <h3>{todo.title}</h3>
            <span>{todo.id}</span>
            <h4>status: {todo.isDone?"completed":"not completed"}</h4>
            <button onClick={()=>dispatch({type:"TOGGLE", id:todo.id})}>toggle</button>
            <button onClick={()=>dispatch({type:"DELETE", id:todo.id})}>DELETE</button>
            <button onClick={()=>setIsEdit(todo.id)}>EDIT</button>
            </li>
      })}{isEdit &&<div>
                <input type='text' placeholder='edit todo here...' value={edit} onChange={(e)=>setEdit(e.target.value)}/>
                <button onClick={()=>dispatch({type:"EDIT",id:isEdit, payload:{id:Date.now(),title:edit,isDone:false}})}>edit</button>
              </div>
          }
    </div>
  )
}

export default TodoTaskManager
