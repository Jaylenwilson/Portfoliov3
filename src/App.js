import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About'
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Project';

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  }, [])
  return (
    <div className="loadbox">
      {
        loading ?
          <div className="innerloadbox">

            <h1>Loading...</h1>
            <HashLoader
              className="loader"
              color={"#46C089"}
              loading={loading}
              size={150} />
          </div>

          :
          <>
            <Navbar />
            <Routes>
              <Route path='/' element={
                <Home />
              } />


              <Route path='/about' element={
                <About />
              } />

              <Route path='/contact' element={
                <Contact />
              } />

              <Route path='/project' element={
                <Project />
              } />

            </Routes>

          </>

      }
    </div>
  );
}

export default App;
