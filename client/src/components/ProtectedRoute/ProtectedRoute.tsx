import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/rtkHook';

// Import components
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

interface ProtectedRouteProps {
  path: string;
  element: JSX.Element;
}

const ProtectedRoute = ({ path, element: Element }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (isAuthenticated) {
    return (
      <div className='relative w-screen bg-radial-gradient-background'>
        <div className='min-h-[92vh] '>
          <Navbar />
          {Element}
        </div>
        <Footer />
      </div>
    );
  } else {
    return <Navigate to={path} />;
  }
};

export default ProtectedRoute;
