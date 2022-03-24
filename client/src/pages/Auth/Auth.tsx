import React from 'react';

// Import Login and Register pages
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
import GlassForm from '../../components/GlassForm/GlassForm';
import { url } from 'inspector';

// Import assets
import background from '../../assets/pictures/mesh-gradient.jpeg';

// Interface
interface propTypes {
  authRoute: string;
}

const Auth = ({ authRoute }: propTypes) => {
  return (
    <div
      className='flex justify-center w-screen h-screen bg-no-repeat bg-cover '
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
