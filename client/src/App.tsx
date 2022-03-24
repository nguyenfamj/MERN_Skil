import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import pages
import Auth from './pages/Auth/Auth';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Navigate replace to='/login' />}></Route>
        <Route path='login*' element={<Auth authRoute='login' />}></Route>
        <Route path='register*' element={<Auth authRoute='register' />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
