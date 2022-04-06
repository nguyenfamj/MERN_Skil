import React from 'react';

// Import Form Components
import GlassInput from './GlassInput/GlassInput';

// Import interface
import { glassFormProps } from '../../interfaces/formInputs';

const GlassForm = ({ inputs, onChange, values }: glassFormProps) => {
  return (
    <form className=''>
      {inputs.map((input) => {
        return <GlassInput metas={input} key={input.id} onChange={onChange} values={values} />;
      })}
    </form>
  );
};

export default GlassForm;
