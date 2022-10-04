import { useState } from "react"

function EditTodo({updateTodo, makeEdit}) {
    const [todo, setTodo] = useState("")

    return (
        <section className = "editTodo">
            <h3>Update Todo</h3>
            <div className="editTodoContainer">
            <input placeholder="Enter in new value" type="text" onChange={(e)=> setTodo(e.target.value)}></input>
                <div>
                    <span onClick={()=> updateTodo(todo)}>Save</span>
                    <span onClick={()=> makeEdit("") }>Cancel</span>
                </div>
            </div>
        </section>
    )
}
export default EditTodo