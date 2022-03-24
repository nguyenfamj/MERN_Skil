import React, { useState } from 'react';

// Import Register Interface
import { inputMetas, onChangeType, registerInput } from '../../../interfaces/formInputs';

// Import Form Components
import GlassForm from '../../../components/GlassForm/GlassForm';

const Register = () => {
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  // Input data
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
    {
      id: 3,
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
      id: 4,
      name: 'firstname',
      type: 'text',
      placeholder: 'Firstname',
      errorMessage: "Firstname shouldn't include any special character and number!",
      label: 'Firstname',
      pattern: '^[A-Za-z]{2,}$',
      required: true,
    },
    {
      id: 5,
      name: 'lastname',
      type: 'text',
      placeholder: 'Lastname',
      errorMessage: "Lastname shouldn't include any special character and number!",
      label: 'Lastname',
      pattern: '^[A-Za-z]{2,}$',
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
    <div>
      <h1>Register</h1>
      <GlassForm inputs={inputs} values={values} onChange={onChange} />
    </div>
  );
};

export default Register;
