import './App.css';
import Home from './components/Home/Home';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarDetail from './components/CarDetail/CarDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/CarDetail/:name' element={<CarDetail />} />
        <Route path ="/" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
