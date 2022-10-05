import { useState } from "react";
import NewTask from "./AddTodo";
import Filter from "./FilterList";
import MakeList from "./MakeList";
import EditTodo from "./EditTodo";

function TaskList() {
    // FOR LOCAL STORAGE
    function setTasks_S(val){
        if(!val) localStorage.setItem('tasks', JSON.stringify(false))
        if(val) localStorage.setItem('tasks', JSON.stringify(val))
    }
    const getTasks_S = ()=> JSON.parse(localStorage.getItem('tasks'));
    
    if(localStorage.getItem('fill') !== 'true') setTasks_S([]);
    localStorage.setItem('fill', 'true')
    // 
    // 
    const [tasks, setTasks] = useState(getTasks_S());
    const [filteredTasks, setFilteredTasks] = useState("");
    const [tasksCategory, setTasksCategory] = useState("All Tasks")
    const [edit, makeEdit] = useState("")

    // ADD A TASK
    function addTask (e,task) {
        console.log(e)
        e.preventDefault()
        const newTask =  {
            id: Math.floor(Math.random()*100000),
            body: task,
            status: false
        }
        setTasks_S([...getTasks_S()].concat(newTask))
        setTasks(getTasks_S())

        if(tasksCategory === "Completed") setFilteredTasks(getTasks_S().filter((x)=> x.status))
        if(tasksCategory === "Incomplete") setFilteredTasks(getTasks_S().filter((x)=> !x.status))
    }
    // COMPLETED A TASK
    function completed(id) {
        setTasks_S(getTasks_S().map((x)=>{
            if(x.id === id) x.status = !x.status;
            return x;
        }))
        setTasks(getTasks_S())
        if(tasksCategory === "Completed") setFilteredTasks(getTasks_S().filter((x)=> x.status))
        if(tasksCategory === "Incomplete") setFilteredTasks(getTasks_S().filter((x)=> !x.status))
     }
     // DELETE A TASK
    function delTask(id) {
        setTasks_S(getTasks_S().filter((x,i)=> x.id !== id ))
        setTasks(getTasks_S())
        if(filteredTasks){
            setFilteredTasks([...getTasks_S().filter((x,i)=> x.id !== id)])
        } 
    }
    // FILTER TASKLIST BY CATEGORY
    function filter(value){
        if(value === "default"){
            setFilteredTasks("")
            setTasksCategory("All Tasks")
        }
        else {
            value === "true" ? setTasksCategory("Completed") : setTasksCategory("Incomplete")
            const filteredTasks = [...getTasks_S()].filter((x)=> x.status.toString() === value);
            setFilteredTasks(filteredTasks)
        } 
    }
    // EDIT TODO
    function updateTodo(updatedTodo) {
        if(edit) {
            setTasks_S([...getTasks_S().map((x)=> {
                if(x.id == edit) x.body = updatedTodo;
                return x;
            })])
            setTasks(getTasks_S())
            makeEdit("")
        }
        if(tasksCategory === "Completed") setFilteredTasks(getTasks_S().filter((x)=> x.status))
        if(tasksCategory === "Incomplete") setFilteredTasks(getTasks_S().filter((x)=> !x.status))
    }
      
    return (  
    <>
    <NewTask addTask={addTask} />
    <Filter filter = {filter} />
    {tasks.length === 0 && !filteredTasks ? <div style={{color: "white", marginTop: "20px"}}> Nothing to do.. </div> : ""}

    {tasks.length > 0 && !filteredTasks ? <MakeList data = {tasks} delTask = {delTask} completed = {completed} makeEdit = {makeEdit} cat = {"All Tasks"}/> : ""}    
    {filteredTasks.length > 0 ? <MakeList data = {filteredTasks} delTask = {delTask} completed = {completed} makeEdit = {makeEdit} cat = {tasksCategory}/> : ""}    
    {filteredTasks && filteredTasks.length === 0 ? <MakeList data = {filteredTasks} makeEdit = {makeEdit}  cat = {tasksCategory}/>: "" }
    { edit && <EditTodo updateTodo = {updateTodo} makeEdit = {makeEdit}  />}
    </>
)
    
}

export default TaskList