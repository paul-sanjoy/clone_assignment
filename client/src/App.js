import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import City from './routes/City';
import Property from './routes/Property';


function App() {
  
  return (
    <div className="App ">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/properties" element={<Property/>}/>
          <Route path="/properties/:id" element={<Property/>}/>
          <Route path="/cities" element={<City/>}/>
          <Route path="/cities/:id" element={<City/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;