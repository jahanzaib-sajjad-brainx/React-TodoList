import React from "react";
import BasicModal from "./BasicModal";

const ToDo=({todo,handleDelete,handleUpdate, handleCheck})=>{
    const Delete=(e)=>{
        e.preventDefault();
        handleDelete(e.currentTarget.id)
     
    }
    const handleChecked=(e)=>
    {   
            e.preventDefault();
            handleCheck(todo.taskid);
    }
  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    

    return (
        <div id={todo.taskid} key={todo.taskid + todo.task} name="todo" value={todo.taskid} className={todo.completed? "todo-complete" : "todo"}>
            <input type="checkbox" checked={todo.completed} onChange={handleChecked} className="me-2"/>
            {todo.task} 
            <button id={todo.taskid} value={todo.taskid} onClick={Delete} className="delete" >Delete</button>
            <button id={todo.taskid} value={todo.taskid} onClick={handleOpen} >Update</button>
            <BasicModal open={open} handleOpen={handleOpen} handleClose={handleClose} handleUpdate={handleUpdate} todoTask={todo.task} todoId={todo.taskid}/>
        </div>
    );
}

export default ToDo;