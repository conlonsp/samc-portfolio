import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './Header';
import Home from '../pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={
          <Home />
        }/>
      </Routes>
    </div>
  );
}

export default App;
