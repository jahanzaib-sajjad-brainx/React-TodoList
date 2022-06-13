import React,{useState, useEffect} from 'react';
import './App.css';

// components
import ToDoList from './components/ToDoList';
import Header from './Header.js';
import ToDoForm from './components/ToDoForm';
import axios from 'axios';
function App() {
    const [toDoList, settoDoList]=useState([]);

    async function getTasks() {
      try{
          const response = await axios.get('/get-tasks');
          settoDoList(response.data["Data Sent"]);
          console.log("todolist ",response.data["Data Sent"])
      }catch(error) {
          return [];
      } 
    }
    const addTask = (userInput ) => {
      try{
        axios.post('/add-task', {
          task:userInput
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
  
  useEffect(() => {
    
    getTasks()
  
  }, []);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    settoDoList(mapped);
  }
  const handleDelete= (id)=>{
    
    axios.delete(`/delete-task/${id}`)
    // .then(() => setStatus('Delete successful'));

    getTasks()
 
  }
  const handleUpdate=(value,id)=>{
    try{
      axios.post(`/update-task/${id}`, {
        task:value
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
  const handleCheck=(id)=>{
    console.log(id);
    try{
      axios.post(`/task-completed/${id}`, {
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
    <div className="App">
      <Header/>
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleDelete={handleDelete} handleUpdate={handleUpdate} handleCheck={handleCheck} />
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
