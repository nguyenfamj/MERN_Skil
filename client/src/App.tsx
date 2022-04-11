import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import ProtectedRoute
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

// Import pages
import Auth from './pages/Auth/Auth';
import Dashboard from './pages/Dashboard/Dashboard';

// Import from RTK
import { useAuthenticateQuery } from './redux/services/authApi';
import { setUser } from './redux/slices/authSlice';
import { useAppDispatch } from './hooks/rtkHook';

function App() {
  const { data, error, isFetching } = useAuthenticateQuery();

  // Handle authenticateUser and change state in the store
  const dispatch = useAppDispatch();
  const authenticateUser = async () => {
    if (isFetching) {
      console.log('Loading...');
    }
    if (data?.success) {
      console.log('Authenticated');
      dispatch(setUser({ user: data?.user }));
    } else if (error) {
      console.log('Authentication Error');
    }
  };

  // Only re-render when data.success (boolean) is changed
  useEffect(() => {
    authenticateUser();
  }, [data?.success]);

  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Navigate replace to='/login' />}></Route>
        <Route path='login/*' element={<Auth authRoute='login' />}></Route>
        <Route path='register/*' element={<Auth authRoute='register' />}></Route>
        <Route
          path='/dashboard/*'
          element={<ProtectedRoute path='/login' element={<Dashboard />}></ProtectedRoute>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
