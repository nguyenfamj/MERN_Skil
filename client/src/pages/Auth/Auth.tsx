import { useEffect } from 'react';

// Import Login and Register pages
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

// Import assets
import background from '../../assets/pictures/mesh-gradient.jpg';

// Import from RTK
import { useAppSelector } from '../../hooks/rtkHook';

// Import from React-Router-DOM
import { useNavigate } from 'react-router-dom';

// Interface
interface propTypes {
  authRoute: string;
}

const Auth = ({ authRoute }: propTypes) => {
  // Router
  const navigate = useNavigate();

  // Take state from the store and query authenticateUser
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // Navigate automatically to dashboard when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated]);

  return (
    <div
      className='flex items-center justify-center w-screen h-screen bg-no-repeat bg-cover '
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {authRoute === 'login' && <LoginForm />}
      {authRoute === 'register' && <RegisterForm />}
    </div>
  );
};

export default Auth;
