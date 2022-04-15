import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/rtkHook';

// Import components
import Navbar from '../Navbar/Navbar';

interface ProtectedRouteProps {
  path: string;
  element: JSX.Element;
}

const ProtectedRoute = ({ path, element: Element }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (isAuthenticated) {
    return (
      <div className='w-screen h-screen bg-radial-gradient-background'>
        <Navbar />
        {Element}
      </div>
    );
  } else {
    return <Navigate to={path} />;
  }
};

export default ProtectedRoute;
