import React, { useEffect } from 'react';

// Import Login and Register pages
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

// Import assets
import background from '../../assets/pictures/mesh-gradient.jpg';

// Import from RTK
import { useAuthenticateQuery } from '../../redux/services/authApi';
import { useAppDispatch } from '../../hooks/rtkHook';
import { setUser } from '../../redux/slices/authSlice';

// Interface
interface propTypes {
  authRoute: string;
}

const Auth = ({ authRoute }: propTypes) => {
  const { data, error, isLoading } = useAuthenticateQuery();
  const dispatch = useAppDispatch();
  const authenticateUser = async () => {
    if (isLoading) {
      console.log('Loading...');
    }
    if (data?.success) {
      console.log('Authenticated');
      dispatch(setUser({ user: data?.user }));
    } else if (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    authenticateUser();
  }, [data?.success]);

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
