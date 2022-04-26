// Import interface
import { inputMetas, glassInputProps } from '../../../interfaces/formInputs';

const GlassInput = ({ metas, onChange, values }: glassInputProps) => {
  const { id, errorMessage, label, required, ...inputProps }: inputMetas = metas;

  return (
    <div className='relative flex flex-col mb-3 w-72'>
      <input
        title='input'
        {...inputProps}
        value={values[inputProps.name]}
        onChange={onChange}
        className='p-3 pl-5 text-sm border shadow-sm border-slate-200 peer w-72 rounded-xl bg-white/40 placeholder:text-black/50 placeholder:text-sm focus:outline-none focus:border-indigo-900 focus:ring-1 focus:ring-indigo-500 invalid:border-red-500 focus:invalid:border-red-500 focus:invalid:ring-red-400 invalid:text-red-400'
      />
      <span className='sm:absolute sm:z-50 hidden  sm:p-2 sm:pr-1 sm:rounded-lg sm:w-[400px] peer-invalid:block sm:bg-white/70 sm:left-full sm:translate-x-5  sm:after:content-[" "] sm:after:absolute sm:after:top-1/2 sm:after:border-solid sm:after:border-transparent sm:after:border-r-white/70 sm:after:right-full sm:after:border-[9px] sm:after:-translate-y-2 sm:mt-0 mt-2'>
        <p className='text-xs text-indigo-900'>{errorMessage}</p>
      </span>
    </div>
  );
};

export default GlassInput;
