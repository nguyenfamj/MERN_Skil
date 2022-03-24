import React from 'react';

// Import Login and Register pages
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

interface propTypes {
  authRoute: string;
}

const Auth = ({ authRoute }: propTypes) => {
  return (
    <>
      <h1>STICKI</h1>
      {authRoute === 'login' && <LoginForm />}
      {authRoute === 'register' && <RegisterForm />}
    </>
  );
};

export default Auth;
