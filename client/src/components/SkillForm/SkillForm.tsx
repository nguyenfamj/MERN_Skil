import React, { SetStateAction, useState } from 'react';

// Import interface
import { inputMetas, onChangeType, skillInput } from '../../interfaces/formInputs';

// Import icon
import { XIcon } from '@heroicons/react/outline';

// Import components
import StatusList from '../SkillAdd/StatusList/StatusList';
import FormButton from './FormButton/FormButton';
import { createSkillResponse } from '../../interfaces/skillApiResponse';

// Import AppDispatch
import { useAppDispatch } from '../../hooks/rtkHook';
import { setNotification } from '../../redux/slices/appSlice';

interface propTypes {
  initialStates: skillInput;
  formTitle: string;
  closeModal: () => void;
  mutationFn: Function;

  updateId?: string;
  setIsRefetch: React.Dispatch<SetStateAction<boolean>>;
}

const SkillForm = ({
  initialStates,
  formTitle,
  closeModal,
  mutationFn,
  updateId,
  setIsRefetch,
}: propTypes) => {
  // Form States and handling
  const [formStates, setFormStates] = useState<skillInput>(initialStates);

  // // Handle changes
  const onChange: onChangeType = (e) => {
    setFormStates({ ...formStates, [e.target.name]: e.target.value });
  };

  // Dispatch
  const dispatch = useAppDispatch();

  // Handle click events create or edit
  const handleCreateEdit = async (): Promise<void> => {
    const formCheckRegex = /^.{2,}$/;

    if (formCheckRegex.test(formStates.title)) {
      try {
        if (updateId) {
          const response: createSkillResponse = await mutationFn({
            _id: updateId,
            updatedSkill: formStates,
          }).unwrap();
          dispatch(setNotification({ title: 'Success', message: response.message }));
          response.success && closeModal();
        } else {
          const response: createSkillResponse = await mutationFn(formStates).unwrap();
          dispatch(setNotification({ title: 'Success', message: response.message }));
          response.success && closeModal();
        }
        setIsRefetch(true);
      } catch (error) {
        dispatch(setNotification({ title: 'Error!', message: error?.data.message }));
      }
    }
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
      pattern: '^.{2,}$',
      errorMessage: 'Title must be more than one character!',
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
    <div className=' transform  bg-white/90 backdrop-blur-lg sm:w-[500px] sm:min-h-[700px] flex flex-col items-center justify-between rounded-xl overflow-y-auto z-10 border-b border-r border-white/60 shadow-2xl p-4'>
      <div className='relative flex items-center justify-center w-full border-b-2 sm:h-16 border-zinc-400'>
        <h2 className='font-bold text-indigo-900 sm:text-2xl'>{formTitle}</h2>
        <button
          title='Close'
          onClick={closeModal}
          className='absolute right-0 flex items-center justify-center rounded-full ring-2 ring-zinc-400 w-7 h-7 text-zinc-400 hover:ring-black hover:text-black '
        >
          <XIcon className='w-6 h-6' />
        </button>
      </div>
      <form className='w-full'>
        <div className='px-8 space-y-4 '>
          {textInputs.map(({ id, title, type, expand, errorMessage, ...props }) => {
            return (
              <div key={id} className='relative z-10 flex flex-col space-y-2'>
                <label className='font-semibold'>{props.label}</label>
                {expand ? (
                  <textarea
                    title={title}
                    {...props}
                    onChange={onChange}
                    className='text-sm border-2 resize-none border-zinc-400 sm:h-24 sm:p-3 rounded-xl placeholder:text-sm focus:outline-none focus:border-indigo-900 focus:ring-1 focus:ring-indigo-500'
                  />
                ) : (
                  <input
                    {...props}
                    type={type}
                    title={title}
                    onChange={onChange}
                    className={`text-sm border-2 border-zinc-400  sm:p-3 rounded-xl placeholder:text-sm focus:outline-none focus:border-indigo-900 focus:ring-1 focus:ring-indigo-500 ${
                      props.value === '' ? '' : 'invalid:border-red-500'
                    } focus:invalid:border-red-500 focus:invalid:ring-red-400 invalid:text-red-400 peer`}
                  />
                )}
                <span className={`hidden mt-1 ${props.value === '' ? '' : 'peer-invalid:block '}`}>
                  <p className='text-xs text-indigo-900'>{errorMessage}</p>
                </span>
              </div>
            );
          })}
          <div className='space-y-2 top-16'>
            <label className='font-semibold'>Status</label>
            <StatusList setFormStates={setFormStates} />
          </div>
        </div>
      </form>
      <div className='relative w-full h-14'>
        <div className='absolute z-0 space-x-4 right-8'>
          <FormButton
            title='Cancel'
            onClick={closeModal}
            className='bg-slate-300 hover:bg-slate-400 hover:text-white'
          />
          {updateId ? (
            <FormButton
              title='Update'
              className='text-white bg-indigo-900 hover:bg-indigo-800'
              onClick={handleCreateEdit}
            />
          ) : (
            <FormButton
              title='Create'
              className='text-white bg-indigo-900 hover:bg-indigo-800'
              onClick={handleCreateEdit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillForm;
