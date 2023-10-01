import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Employees from './pages/Employees/employees';
import React from 'react'
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
   
    
 <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/employees" element={<Employees />} />
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
