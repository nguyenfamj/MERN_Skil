import React from 'react';

// Import Login Interface
import { LoginType } from '../../../interfaces/formInterface';

// Import Form Components
import GlassForm from '../../../components/GlassForm/GlassForm';

const LoginForm = () => {
  return (
    <div>
      <h1>Login</h1>
      <GlassForm />
    </div>
  );
};

export default LoginForm;
