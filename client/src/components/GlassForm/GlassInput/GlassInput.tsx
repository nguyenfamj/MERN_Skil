import React from 'react';

// Import interface
import { inputMetas, glassInputProps } from '../../../interfaces/formInputs';

const GlassInput = ({ metas, values, onChange }: glassInputProps) => {
  const { id, errorMessage, label, required, ...inputProps }: inputMetas = metas;

  return (
    <div className='flex-col'>
      <input
        {...inputProps}
        className='p-3 mb-4 border border-black border-none rounded-xl bg-white/40 placeholder:text-black/70'
      />
    </div>
  );
};

export default GlassInput;
