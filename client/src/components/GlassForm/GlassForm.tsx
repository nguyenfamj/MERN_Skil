import React from 'react';

// Import Form Components
import GlassInput from './GlassInput/GlassInput';

// Import interface
import { glassFormProps } from '../../interfaces/formInputs';

const GlassForm = ({ inputs, onChange }: glassFormProps) => {
  return (
    <form className=''>
      {inputs.map((input) => (
        <GlassInput metas={input} key={input.id} onChange={onChange} />
      ))}
    </form>
  );
};

export default GlassForm;
