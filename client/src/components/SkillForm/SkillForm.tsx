import { useState } from 'react';

// Import interface
import { inputMetas, onChangeType, skillInput } from '../../interfaces/formInputs';

// Import icon
import { XIcon } from '@heroicons/react/outline';

// Import components
import StatusList from '../SkillAdd/StatusList/StatusList';

interface propTypes {
  initialStates: skillInput;
  formTitle: string;
  closeModal: () => void;
}

const SkillForm = ({ initialStates, formTitle, closeModal }: propTypes) => {
  // Form States and handling
  const [formStates, setFormStates] = useState<skillInput>(initialStates);

  // // Handle changes
  const onChange: onChangeType = (e) => {
    setFormStates({ ...formStates, [e.target.name]: e.target.value });
  };

  const textInputs: inputMetas[] = [
    {
      id: 1,
      title: 'Title',
      value: formStates.title,
      name: 'title',
      type: 'text',
      placeholder: 'Title',
      label: 'Title',
      pattern: '^[A-Za-z0-9]{2,}$',
      errorMessage:
        "Title must be more than one character shouldn't include any special character!",
      required: true,
    },
    {
      id: 2,
      title: 'Description',
      value: formStates.description,
      name: 'description',
      type: 'text',
      placeholder: 'Description',
      label: 'Description',
      required: true,
      expand: true,
    },
    {
      id: 3,
      title: 'Link',
      value: formStates.url,
      name: 'url',
      type: 'text',
      placeholder: 'Link',
      label: 'Link',
      required: false,
    },
  ];

  return (
    <div className=' transform  bg-white/60 backdrop-blur-lg sm:w-[500px] sm:min-h-[700px] flex flex-col items-center justify-between rounded-xl overflow-y-auto z-10 border-b border-r border-white/60 shadow-2xl'>
      <div className='relative flex items-center justify-center w-11/12 border-b-2 sm:h-16 border-zinc-400'>
        <h2 className='font-bold text-indigo-900 sm:text-2xl'>{formTitle}</h2>
        <button
          title='Close'
          onClick={closeModal}
          className='absolute right-0 flex items-center justify-center rounded-full ring-2 ring-zinc-400 w-7 h-7 text-zinc-400 hover:ring-black hover:text-black '
        >
          <XIcon className='w-6 h-6' />
        </button>
      </div>
      <form>
        <div className='space-y-4'>
          {textInputs.map(({ id, title, type, expand, errorMessage, ...props }) => {
            return (
              <div key={id} className='relative z-10 flex flex-col space-y-2'>
                <label className='font-semibold'>{props.label}</label>
                {expand ? (
                  <textarea
                    title={title}
                    {...props}
                    onChange={onChange}
                    className='text-sm border-2 resize-none border-zinc-400 sm:w-96 sm:h-24 sm:p-3 rounded-xl placeholder:text-sm focus:outline-none focus:border-indigo-900 focus:ring-1 focus:ring-indigo-500'
                  />
                ) : (
                  <input
                    {...props}
                    type={type}
                    title={title}
                    onChange={onChange}
                    className={`text-sm border-2 border-zinc-400 sm:w-96 sm:p-3 rounded-xl placeholder:text-sm focus:outline-none focus:border-indigo-900 focus:ring-1 focus:ring-indigo-500 ${
                      props.value === '' ? '' : 'invalid:border-red-500'
                    } focus:invalid:border-red-500 focus:invalid:ring-red-400 invalid:text-red-400 peer`}
                  />
                )}
                <span
                  className={`hidden mt-1 sm:w-96  ${
                    props.value === '' ? '' : 'peer-invalid:block '
                  }`}
                >
                  <p className='text-xs text-indigo-900'>{errorMessage}</p>
                </span>
              </div>
            );
          })}
          <div className=' sm:w-96 top-16'>
            <label className='font-semibold'>Status</label>
            <StatusList setFormStates={setFormStates} />
          </div>
        </div>
      </form>
      <div className='h-32 '>a</div>
    </div>
  );
};

export default SkillForm;
