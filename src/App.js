import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Home from "./pages/Home";
import ListPatient from './pages/ListPatient';
import { BloodBank } from "./pages/BloodBank";
// import Header from "./pages/Header";
import { Admin } from "./pages/Admin";
import { Donor } from "./pages/Donor";
import { Patient } from "./pages/Patient";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/admin' element={<Admin />} />
          <Route exact path='/blood-bank' element={<BloodBank />} />
          <Route exact path='/donor' element={<Donor />} />
          <Route exact path='/patient' element={<Patient />} />
          <Route exact path='/listPat' element={<ListPatient />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
