import React, { useState } from 'react';

// Import Login Interface
import { inputMetas, onChangeType } from '../../../interfaces/formInputs';

// Import Form Components
import GlassForm from '../../../components/GlassForm/GlassForm';
import { GlassWrapper } from '../../../components/GlassWrapper/GlassWrapper.styled';

const LoginForm = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  // Inputs data
  const inputs: inputMetas[] = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage: "Username shouldn't include any special character!",
      label: 'Username',
      pattern: '^[A-Za-z0-9]{2,}$',
      required: true,
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be more than 8 characters and includes at least 1 letter, 1 number and 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$`,
      required: true,
    },
  ];

  const onChange: onChangeType = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <GlassWrapper>
      <h1>Login</h1>
      <GlassForm inputs={inputs} values={values} onChange={onChange} />
    </GlassWrapper>
  );
};

export default LoginForm;
