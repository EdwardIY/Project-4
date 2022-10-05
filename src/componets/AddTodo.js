import { useState } from "react";

function NewTask ({addTask}) {
    const [ task, setTask ] = useState("");

    

    return <form className="addTaskContainer" onSubmit={(e)=>{addTask(e,task)}}>
        <input required onChange={(e)=>{setTask(e.target.value)}} type="text" placeholder="What do you have planned?"/>
        <button >Add Task</button>
    </form>
}

export default NewTask