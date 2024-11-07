import './App.css';
import Home from './components/Home/Home';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarDetail from './components/CarDetail/CarDetail';
import Navbar from './components/Navbar/Navbar';
import Restapi from './components/Restapi/Restapi';

function App() {
  const apiUrl = process.env.REACT_APP_API_URL; // Access the environment variable directly
  return (
    <Restapi.Provider value={{ restapi: apiUrl }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/CarDetail/:id' element={<CarDetail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Restapi.Provider>
  );
}

export default App;
