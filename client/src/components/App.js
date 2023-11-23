import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Header';
import Home from '../pages/Home';
import About from '../pages/About';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={
          <Home />
        }/>
        <Route path='/about' element={
          <About />
        }/>
      </Routes>
    </div>
  );
}

export default App;
