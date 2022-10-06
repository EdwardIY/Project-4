import { useState } from "react"

function EditTodo({updateTodo, makeEdit}) {
    const [todo, setTodo] = useState("")

    return (
        <form className = "editTodo" onSubmit={(e)=> updateTodo(e,todo) }>
            <h3>Update Todo</h3>
            <div className="editTodoContainer">
            <input required placeholder="Enter in new value" type="text" onChange={(e)=> setTodo(e.target.value)}></input>
                <div>
                    <button onClick={()=> updateTodo(todo)}>Save</button>
                    <span onClick={()=> makeEdit("") }>Cancel</span>
                </div>
            </div>
        </form>
    )
}
export default EditTodo