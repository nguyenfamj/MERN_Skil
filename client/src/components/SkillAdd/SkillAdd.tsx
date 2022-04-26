import { Fragment, SetStateAction, useRef, useState } from 'react';

// Import from HeadlessUI
import { Transition, Dialog } from '@headlessui/react';

// Import components
import Button from './SkillAddButton/SkillAddButton';
import SkillForm from '../SkillForm/SkillForm';

// Import interfaces
import { skillInput } from '../../interfaces/formInputs';
import { statusEnum } from '../../interfaces/skillApiResponse';

// Import from RTK-Query
import { useCreateSkillMutation } from '../../redux/services/skillApi';

interface propTypes {}

const SkillAdd = ({}: propTypes) => {
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

  // Handle functions with api RTK Query
  const [createSkill] = useCreateSkillMutation();

  return (
    <>
      {!isOpen && (
        <div>
          <Button openModal={openModal} />
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
              enterFrom='opacity-50 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 '
              leaveTo='opacity-50 '
            >
              <div className='flex items-center justify-center w-screen h-screen '>
                <SkillForm
                  initialStates={initialFormStates}
                  formTitle='Create Skill'
                  closeModal={closeModal}
                  mutationFn={createSkill}
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
