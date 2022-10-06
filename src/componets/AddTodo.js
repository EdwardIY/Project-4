import { useState } from "react";

function NewTask ({addTask}) {
    const [ task, setTask ] = useState("");
    const [ inputMsg, setInputMsg ] = useState("What do you have planned?");

    function submit(e,task){
        addTask(e,task)
        setTask("")
        setInputMsg("Task added!")
        setTimeout(()=> setInputMsg("What do you have planned?"), 1000)
    }
    

    return <form className="addTaskContainer" 
    onSubmit={(e)=>{submit(e,task)}}>
        <input
         required
          onChange={(e)=>{setTask(e.target.value)}}
        type="text"
         placeholder={inputMsg}
         value={task}
        />
        <button >Add Task</button>
    </form>
}

export default NewTask