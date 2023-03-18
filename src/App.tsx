import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/login';
import { Dashboard } from './pages/dashboard';
import { Clientes } from './pages/clients';

function App() {
  return (
    <Routes>
      {<Route path='/login' element={<Login />}></Route>}
      {<Route path='/dashboard' element={<Dashboard />}></Route>}
      {<Route path='/clients' element={<Clientes />}></Route>}
      <Route path="*" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
