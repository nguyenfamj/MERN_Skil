import { useState } from 'react';

// Import Register Interface
import { inputMetas, onChangeType, registerAuth } from '../../../interfaces/formInputs';
import { registerAuthResponse } from '../../../interfaces/authApiResponse';

// Import Form Components
import GlassForm from '../../../components/GlassForm/GlassForm';
import GlassButton from '../../../components/GlassForm/GlassButton/GlassButton';
import { GlassWrapper } from '../../../components/GlassWrapper/GlassWrapper.styled';

// Import from react-router
import { Link, useNavigate } from 'react-router-dom';

// Import from Redux toolkit (RTK Query and State management)
import { useRegisterMutation } from '../../../redux/services/authApi';
import { useAppDispatch } from '../../../hooks/rtkHook';
import { setCredentials } from '../../../redux/slices/authSlice';
import { setNotification } from '../../../redux/slices/appSlice';

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

  // Router
  const navigate = useNavigate();

  // Register States
  const [registerStates, setRegisterStates] = useState<registerAuth>({
    username: '',
    password: '',
    firstname: '',
    lastname: '',
  });

  // onChange function to mutate states
  const onChange: onChangeType = (e) => {
    setRegisterStates({
      ...registerStates,
      [e.target.name]: e.target.value,
    });
  };

  // Handle register function
  // useMutation hooks
  const dispatch = useAppDispatch();
  const [register, { isLoading }] = useRegisterMutation();

  // onClick button handler
  const registerHandler = async () => {
    const usernameRegex: RegExp = /^[A-Za-z0-9]{2,}$/;
    const passwordRegex: RegExp =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    const firstnameRegex: RegExp = /^[A-Za-z]{2,}$/;
    const lastnameRegex: RegExp = /^[A-Za-z]{2,}$/;

    if (
      usernameRegex.test(registerStates.username) &&
      passwordRegex.test(registerStates.password) &&
      firstnameRegex.test(registerStates.firstname) &&
      lastnameRegex.test(registerStates.lastname)
    ) {
      try {
        const response: registerAuthResponse = await register(registerStates).unwrap();
        console.log(response);
        dispatch(setCredentials({ accessToken: response.accessToken }));
        if (response.success) {
          dispatch(
            setNotification({ title: 'Registered successfully', message: response.message })
          );
          navigate('/login');
        }
      } catch (error) {
        dispatch(setNotification({ title: 'Error', message: error?.data.message }));
      }
    }
  };

  return (
    <>
      <GlassWrapper>
        <h1 className='relative text-4xl font-black text-sky-500 top-14'>SKIL</h1>
        <div>
          <h1 className='mb-4 text-2xl font-semibold text-indigo-900'>Create New Account</h1>
          <GlassForm inputs={inputs} onChange={onChange} values={registerStates} />
          <GlassButton
            title='Register'
            onClick={registerHandler}
            isLoading={isLoading}
          ></GlassButton>
        </div>
        <p className='mb-32 text-sm text-indigo-900 sm:mb-6'>
          Already have an account?{' '}
          <Link to='/login' className='underline'>
            Login
          </Link>
        </p>
      </GlassWrapper>
    </>
  );
};

export default Register;
