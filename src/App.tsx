import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import DownloadTrial from './DownloadTrial';
import Login from './Login';
import Register from './Register';
import './App.css';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cptrial" element={<DownloadTrial />} />
          </Routes>
        </main>
      </>
    </Router>
  );
}

export default App;