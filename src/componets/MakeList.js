function MakeList({data,completed, makeEdit,delTask, cat}) {

return (
    <ul>
        <h2>{cat}</h2>
        {data.length > 0 && (data.map((x)=>{  
        let style_1 = "none";
        let style_2 = "1";
        let style_3 = "navy"
    if(x.status) {
        style_1 = "line-through";
        style_2 = ".3";
        style_3 = "red";
    } 
    return <li  key={x.id} className="task">
        <span className="taskText" style={{textDecoration : style_1, opacity : style_2,color : style_3}}>{x.body}</span>
        <div>
            <span onClick={()=>{completed(x.id)}}>{cat=== 'Completed' ? "Undo" : "Done"}</span>
            <span onClick={()=> makeEdit([x.id]) }>Edit</span>
            <span onClick={()=> {delTask(x.id)}}>Delete</span>
        </div>
        </li>
}))}
{ data.length === 0 && <div style={{color: "white", opacity : ".7"}}>This category is currently empty...</div>}
</ul>)

}
export default MakeList