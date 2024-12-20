import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import EmployeeList from "./components/EmployeeList";
import Navbar from "./components/Navbar"; // Import the Navbar component

const App = () => {
  return (
    <div className="app">
      <Navbar /> {/* Use the Navbar component */}
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </div>
  );
};

export default App;
