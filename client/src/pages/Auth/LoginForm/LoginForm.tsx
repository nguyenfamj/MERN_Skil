import React, { useState } from 'react';

// Import Login Interface
import { inputMetas, onChangeType, loginAuth } from '../../../interfaces/formInputs';
import { loginAuthResponse, errorAlert } from '../../../interfaces/authApiResponse';

// Import Form Components
import GlassForm from '../../../components/GlassForm/GlassForm';
import GlassButton from '../../../components/GlassForm/GlassButton/GlassButton';
import { GlassWrapper } from '../../../components/GlassWrapper/GlassWrapper.styled';

// Import from react-router
import { Link, useNavigate } from 'react-router-dom';

// Import from Redux toolkit
import { useLoginMutation } from '../../../redux/services/authApi';
import { useAppDispatch } from '../../../hooks/rtkHook';
import { setCredentials } from '../../../redux/slices/authSlice';
import { setNotification } from '../../../redux/slices/appSlice';

const LoginForm = () => {
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
      pattern: '^[A-Za-z0-9]{1,}$',
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

  // Router
  const navigate = useNavigate();

  // Login States
  const [loginStates, setLoginStates] = useState<loginAuth>({
    username: '',
    password: '',
  });

  // onChange function to mutate states
  const onChange: onChangeType = (e) => {
    setLoginStates({
      ...loginStates,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login function
  // // useMutation hooks
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

  // // onClick button handler
  const loginHandler = async () => {
    const usernameRegex: RegExp = /^[A-Za-z0-9]{1,}$/;
    const passwordRegex: RegExp =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    if (usernameRegex.test(loginStates.username) && passwordRegex.test(loginStates.password)) {
      try {
        const response: loginAuthResponse = await login(loginStates).unwrap();

        dispatch(setCredentials({ accessToken: response.accessToken }));

        if (response.success) {
          dispatch(setNotification({ title: 'Login successfully', message: response.message }));
          navigate('/dashboard');
        }
      } catch (error) {
        dispatch(setNotification({ title: 'Login failed', message: error?.data.message }));
      }
    }
  };

  return (
    <>
      <GlassWrapper>
        <h1 className='relative text-4xl font-black top-14 text-sky-500'>SKIL</h1>

        <div>
          <h1 className='mb-4 text-2xl font-semibold text-indigo-900'>Login</h1>
          <GlassForm inputs={inputs} onChange={onChange} values={loginStates} />
          <GlassButton title='Login' onClick={loginHandler} isLoading={isLoading}></GlassButton>
        </div>
        <p className='mb-32 text-sm text-indigo-900 sm:mb-6'>
          Don't have an account?
          <Link to='/register' className='underline'>
            Register
          </Link>
        </p>
      </GlassWrapper>
    </>
  );
};

export default LoginForm;
