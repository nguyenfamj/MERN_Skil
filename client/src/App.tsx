import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import ProtectedRoute
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { Authentication } from './components/Authentication/Authentication';

// Import pages
import Auth from './pages/Auth/Auth';
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/About/About';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <Router>
      <Authentication />
      <Routes>
        <Route path='/*' element={<Navigate replace to='/login' />} />
        <Route path='login/*' element={<Auth authRoute='login' />} />
        <Route path='register/*' element={<Auth authRoute='register' />} />
        <Route
          path='/dashboard'
          element={<ProtectedRoute path='/login' element={<Dashboard />} />}
        />
        <Route path='/about' element={<ProtectedRoute path='/login' element={<About />} />} />
        <Route path='/profile' element={<ProtectedRoute path='/login' element={<Profile />} />} />
      </Routes>
    </Router>
  );
}

export default App;
