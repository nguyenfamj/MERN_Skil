import React from 'react';

// Import interface
import { inputMetas, glassInputProps } from '../../../interfaces/formInputs';

const GlassInput = ({ metas, onChange }: glassInputProps) => {
  const { id, errorMessage, label, required, ...inputProps }: inputMetas = metas;

  return (
    <div className='flex flex-col mb-3 w-72'>
      <input
        title='input'
        {...inputProps}
        onChange={onChange}
        className='p-3 pl-5 text-sm border shadow-sm border-slate-200 peer w-72 rounded-xl bg-white/40 placeholder:text-black/50 placeholder:text-sm focus:outline-none focus:border-indigo-900 focus:ring-1 focus:ring-indigo-500 invalid:border-red-500 focus:invalid:border-red-500 focus:invalid:ring-red-400 invalid:text-red-400'
      />
      <span className='absolute z-10 invisible p-2 pr-1 rounded-lg w-[400px] peer-invalid:visible bg-white/70 left-[83%] after:content-[" "] after:absolute after:top-1/2 after:border-solid after:border-transparent after:border-r-white/70 after:right-full after:border-[9px] after:-translate-y-2'>
        <p className='text-xs text-indigo-900'>{errorMessage}</p>
      </span>
    </div>
  );
};

export default GlassInput;
