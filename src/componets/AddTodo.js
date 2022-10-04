import { useState } from "react";

function NewTask ({addTask}) {
    const [ task, setTask ] = useState("");

    return <section className="addTaskContainer">
        <input required onChange={(e)=>{setTask(e.target.value)}} type="text" placeholder="What do you have planned?"/>
        <div onClick={()=>{addTask(task)}}>Add Task</div>
    </section>
}

export default NewTask