
import React,{useState, useEffect} from 'react';

// components
import ToDoList from './ToDoList';
import Header from '../Header';
import ToDoForm from './ToDoForm';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


const TaskComponent = () => {
    const [toDoList, settoDoList]=useState([]);
   

    const addTask = (userInput ) => {
      try{
        axios.post('/add-task', {
          title:userInput,
          uid:localStorage.getItem("uid")
        })
        .then(function (response) {
          getTasks()
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      catch(error) {
          return [];
      } 
    }

    async function getTasks() {
      try{
          const response = await axios.post('/get-tasks',{uid:localStorage.getItem("uid")});
          settoDoList(response.data["Data Sent"]);
          console.log("todolist ",response.data["Data Sent"])
      }catch(error) {
          return [];
      } 
    }
   
  
  useEffect(() => {
    
    getTasks()
  
  }, []);

  const handleDelete= (id)=>{
    axios.delete(`/delete-task/${id}`)
    // .then(() => setStatus('Delete successful'));

    getTasks()
 
  }
  const handleUpdate=(value,id)=>{
    try{
      axios.post(`/update-task/${id}`, {
        title:value
      })
      .then(function (response) {
        getTasks()
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    catch(error) {
        return [];
    } 
  }
  const handleCheck=(id,completed)=>{
    try{
      axios.post(`/task-completed/${id}`, {
        completed:completed
      })
      .then(function (response) {
        getTasks()
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    catch(error) {
        return [];
    } 
  }

    return (
        <div className='bg-info'>
          <h1 className='text-center pt-5 ms-5'>Welcome {localStorage.getItem("uname")}</h1>
          <div className='d-flex flex-column align-items-center todo-div'>
            <Header/>
            <ToDoList toDoList={toDoList} handleDelete={handleDelete} handleUpdate={handleUpdate} handleCheck={handleCheck} />
            <ToDoForm addTask={addTask}/>
          </div>
        </div>
    );
 };

export default TaskComponent;


