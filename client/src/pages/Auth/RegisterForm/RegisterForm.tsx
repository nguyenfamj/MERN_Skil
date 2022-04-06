import React, { useState } from 'react';

// Import Register Interface
import { inputMetas, onChangeType, registerAuth } from '../../../interfaces/formInputs';

// Import Form Components
import GlassForm from '../../../components/GlassForm/GlassForm';
import GlassButton from '../../../components/GlassForm/GlassButton/GlassButton';
import { GlassWrapper } from '../../../components/GlassWrapper/GlassWrapper.styled';

// Import from react-router
import { Link } from 'react-router-dom';

const Register = () => {
  // Input data
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
    {
      id: 3,
      name: 'firstname',
      type: 'text',
      placeholder: 'Firstname',
      errorMessage: "Firstname shouldn't include any special character and number!",
      label: 'Firstname',
      pattern: '^[A-Za-z]{2,}$',
      required: true,
    },
    {
      id: 4,
      name: 'lastname',
      type: 'text',
      placeholder: 'Lastname',
      errorMessage: "Lastname shouldn't include any special character and number!",
      label: 'Lastname',
      pattern: '^[A-Za-z]{2,}$',
      required: true,
    },
  ];

  const [registerStates, setRegisterStates] = useState<registerAuth>({
    username: '',
    password: '',
    firstname: '',
    lastname: '',
  });

  const onChange: onChangeType = (e) => {
    setRegisterStates({
      ...registerStates,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <GlassWrapper>
      <h1 className='text-4xl font-black text-sky-500 translate-y-14'>STICKI</h1>
      <div>
        <h1 className='mb-4 text-2xl font-semibold text-indigo-900'>Create New Account</h1>
        <GlassForm inputs={inputs} onChange={onChange} values={registerStates} />
        <GlassButton title='Register'></GlassButton>
      </div>
      <p className='pb-6 text-sm text-indigo-900'>
        Already have an account?{' '}
        <Link to='/login' className='underline'>
          Login
        </Link>
      </p>
    </GlassWrapper>
  );
};

export default Register;
