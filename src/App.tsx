import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';

function App() {
  return (
    <Routes>
      {<Route path='/login' element={<Login />}></Route>}
      {<Route path='/contracts' element={<Dashboard />}></Route>}
      <Route path="*" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
