import React from 'react';

// Import interface
import { inputMetas, glassInputProps } from '../../../interfaces/formInputs';

const GlassInput = ({ metas, values, onChange }: glassInputProps) => {
  const { id, errorMessage, label, required, ...inputProps }: inputMetas = metas;

  return (
    <div className='flex flex-col'>
      <label>{label}</label>
      <input {...inputProps} className='border border-black rounded-lg' />
    </div>
  );
};

export default GlassInput;
