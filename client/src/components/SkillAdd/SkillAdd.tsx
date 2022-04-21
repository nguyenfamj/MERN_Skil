import React, { Fragment, useRef, useState } from 'react';

// Import from HeadlessUI
import { Transition, Dialog } from '@headlessui/react';

// Import components
import Button from './SkillAddButton/SkillAddButton';
import SkillForm from '../SkillForm/SkillForm';

// Import interfaces
import { skillInput } from '../../interfaces/formInputs';
import { statusEnum } from '../../interfaces/skillApiResponse';

interface PropTypes {
  children?: React.ReactNode;
}

const SkillAdd = ({ children }: PropTypes) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const initialFocusRef = useRef(null);

  const openModal = (): void => {
    setIsOpen(true);
  };

  const closeModal = (): void => {
    setIsOpen(false);
  };

  //   Form States
  const initialFormStates: skillInput = {
    title: '',
    description: '',
    status: statusEnum.Planned,
    url: '',
  };

  return (
    <>
      {!isOpen && (
        <div>
          <Transition
            show={!isOpen}
            enter='transition-opacity duration-150'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Button openModal={openModal} />
          </Transition>
        </div>
      )}
      <Transition as={Fragment} show={isOpen}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10'
          onClose={closeModal}
          initialFocus={initialFocusRef}
        >
          <div className='min-h-screen'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-slate-700/10 backdrop-blur-sm ' />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='translate-y-3 opacity-90'
              enterTo='translate-y-0 opacity-100'
              leave='ease-in duration-200'
              leaveFrom='translate-y-0 '
              leaveTo='translate-y-3 '
            >
              <div className='flex items-center justify-center w-screen h-screen '>
                <SkillForm
                  initialStates={initialFormStates}
                  formTitle='Create Skill'
                  closeModal={closeModal}
                />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SkillAdd;
