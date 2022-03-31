import React, { useState } from 'react';

// Import Login Interface
import { inputMetas, onChangeType, loginAuth } from '../../../interfaces/formInputs';

// Import Form Components
import GlassForm from '../../../components/GlassForm/GlassForm';
import GlassButton from '../../../components/GlassForm/GlassButton/GlassButton';
import { GlassWrapper } from '../../../components/GlassWrapper/GlassWrapper.styled';

// Import from react-router
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [values, setValues] = useState<loginAuth>({
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
      errorMessage:
        "Username must be more than one character shouldn't include any special character!",
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
      <h1 className='text-4xl font-black translate-y-14 text-sky-500'>STICKI</h1>
      <div>
        <h1 className='mb-4 text-2xl font-semibold text-indigo-900'>Login</h1>
        <GlassForm inputs={inputs} onChange={onChange} />
        <GlassButton title='Login'></GlassButton>
      </div>
      <p className='pb-6 text-sm text-indigo-900'>
        Don't have an account?
        <Link to='/register' className='underline'>
          Register
        </Link>
      </p>
    </GlassWrapper>
  );
};

export default LoginForm;
