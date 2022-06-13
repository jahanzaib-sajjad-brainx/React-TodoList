import React from "react";
import ToDo from './ToDo';


const ToDoList = ({toDoList, handleToggle, handleDelete, handleUpdate,handleCheck}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleDelete={handleDelete} handleUpdate={handleUpdate} handleCheck={handleCheck}/>
                )
            })}
        </div>
    );
 };

export default ToDoList;



