function Filter({filter}) {
function getValue(value) {
    filter(value)
}



    return (
        <select onChange={(e)=> getValue(e.target.value)}>
            <option value = {"default"} >All</option>
            <option value={true}>Completed</option>
            <option value={false}>Incomplete</option>
        </select>
    )
}

export default Filter