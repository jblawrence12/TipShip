import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SetNav from './components/SetNav';
import AddEmployee from './components/AddEmployee';
import RemoveEmployee from './components/RemoveEmployee';
import ViewEmployees from './components/ViewEmployees'
import './App.css';


function App() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/employee")
      .then(res => res.json())
      .then(data => {
        console.log("Loaded employees:", data); // Debugging line to check what's being loaded
        setEmployees(data);
      })
      .catch(console.error);
  }, []);
  return (
    <div>
      <SetNav />
      {}
    </div>
  );
}

export default App;
