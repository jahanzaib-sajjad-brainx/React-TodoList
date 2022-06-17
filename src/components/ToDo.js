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
            handleCheck(todo._id,todo.completed);
    }
  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    

    return (
        <div id={todo._id} key={todo._id + todo.title} name="todo" value={todo._id} className={todo.completed? "todo-complete" : "todo"}>
            <div className="mb-3 row w-100 ms-5">
                <div className="col-6">
                    <input type="checkbox" checked={todo.completed} onChange={handleChecked} className="me-2"/>
                    <span className="me-5"> {todo.title} </span>
                </div>
                <div className="col-6">
                    <button id={todo._id} value={todo._id} onClick={Delete} className="btn btn-danger me-2" >Delete</button>
                    <button id={todo._id} value={todo._id} onClick={handleOpen} className="btn btn-primary" >Update</button>
                </div>
               
            </div>
            <BasicModal open={open} handleOpen={handleOpen} handleClose={handleClose} handleUpdate={handleUpdate} todoTask={todo.title} todoId={todo._id}/>
        </div>
    );
}

export default ToDo;