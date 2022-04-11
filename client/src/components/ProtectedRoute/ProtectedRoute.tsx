import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/rtkHook';

interface ProtectedRouteProps {
  path: string;
  element: JSX.Element;
}

const ProtectedRoute = ({ path, element: Element }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  if (isAuthenticated) {
    return Element;
  } else {
    return <Navigate to={path} />;
  }
};

export default ProtectedRoute;
