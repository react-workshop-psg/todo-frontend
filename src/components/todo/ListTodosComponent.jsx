import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import { retrieveAllTodosForUsernameApi, deleteTodoApi } from "./api/TodoApiService"

function ListTodosComponent() {

    const today = new Date()

    const navigate = useNavigate()
    
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const [todos,setTodos] = useState([])

    const [message,setMessage] = useState(null)
    
    useEffect ( () => refreshTodos(), [])

    function refreshTodos() {
        
        retrieveAllTodosForUsernameApi()
        .then(response => {
            setTodos(response.data)
        }
            
        )
        .catch(error => console.log(error))
    
    }

    function deleteTodo(id) {
       
       
    }

    function updateTodo(id) {
       
    }

    function addNewTodo() {
        navigate(`/todos/-1`)
    }

    return (
        <div className="container">
            <h1>Things You Want To Do!</h1>
            
            {message && <div className="alert alert-warning">{message}</div>}

            
            <div>
                <table className="table">
                    <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                            </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                        )
                    }
                    </tbody>

                </table>
            </div>
            <div className="btn btn-success m-5" onClick={addNewTodo}>Add New Todo</div>
        </div>
    )
}

export default ListTodosComponent