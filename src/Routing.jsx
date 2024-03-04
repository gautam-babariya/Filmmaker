import './Routing.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Addvideo from '../Pages/Addvideo/Addvideo';
import AboutUs from '../Components/Aboutus/Aboutus';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
          <Route path="/addvideo" element={<Addvideo />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
