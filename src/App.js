import { BrowserRouter, Routes, Route} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import TaskComponent from "./components/TaskComponent";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/Signup";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/todolist" element={<TaskComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
