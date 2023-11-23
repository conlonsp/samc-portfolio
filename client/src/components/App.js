import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';

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
        <Route path='/portfolio'>
          <Route index element={
            <Portfolio />
          }/>
          <Route path=':id' element={
            <Project />
          }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
