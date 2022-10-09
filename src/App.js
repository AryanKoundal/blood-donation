import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Home from "./pages/Home";
// import Header from "./pages/Header";
import { Admin } from "./pages/Admin";
import { BloodBank } from "./pages/BloodBank";
import { Donor } from "./pages/Donor";

import { Patient } from "./pages/Patient";
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';


function App() {
  return (
    <>
      <h1>hello</h1>
      <Home />
      <Navbar />
      {/* <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/admin' element={<Admin />} />
          <Route exact path='/bloodbank' element={<BloodBank />} />
          <Route exact path='/donor' element={<Donor />} />
          <Route exact path='/patient' element={<Patient />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
