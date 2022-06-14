import React from "react";
import ToDo from './ToDo';


const ToDoList = ({toDoList, handleDelete, handleUpdate,handleCheck}) => {
    return (
        <div>
            {toDoList.map((todo,index) => {
                return (
                    <ToDo key={index} todo={todo} handleDelete={handleDelete} handleUpdate={handleUpdate} handleCheck={handleCheck}/>
                )
            })}
        </div>
    );
 };

export default ToDoList;



