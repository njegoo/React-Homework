import {AiFillDelete} from 'react-icons/ai';

export const Todos = ({listOfTodos,markTodoAsDone,deleteTodo}) => {
    return(
        <ol>
            {listOfTodos.map(todo=>{
                return(
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <input 
                            type="checkbox"
                            value={todo.done}
                            checked={todo.done}
                            onChange={()=>{markTodoAsDone(todo)}}
                         />
                         <button
                            onClick={()=>deleteTodo(todo)}
                         >
                            <AiFillDelete></AiFillDelete>
                        </button>
                        <p>Random ID koe nejke da ide u key {todo.id}</p>
                         
                    </li>
                )
            })}
        </ol>
    )
}