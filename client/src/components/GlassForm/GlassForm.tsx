import React from 'react';

// Import Form Components
import GlassInput from './GlassInput/GlassInput';

// Import interface
import { glassFormProps } from '../../interfaces/formInputs';

const GlassForm = ({ inputs, values, onChange }: glassFormProps) => {
  return (
    <form className=''>
      {inputs.map((input) => (
        <GlassInput metas={input} key={input.id} values={values} onChange={onChange} />
      ))}
    </form>
  );
};

export default GlassForm;
