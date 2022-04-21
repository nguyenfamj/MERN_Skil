import { PlusIcon } from '@heroicons/react/solid';

type PropTypes = {
  className?: string;
  openModal: () => void;
};

const SkillAddButton = ({ className, openModal }: PropTypes) => {
  return (
    <button
      title='Add skill'
      type='button'
      className={`flex items-center justify-center w-12 h-12 bg-white rounded-full sm:w-9 sm:h-9 bg-black/30  hover:ring-4 hover:ring-white/80 fixed z-50 transform translate-x-1/2 bottom-2 right-1/2 sm:bottom-0 sm:translate-x-0 sm:relative sm:right-2 sm:ml-6`}
      onClick={openModal}
    >
      <PlusIcon className='w-10 h-10 text-white sm:w-8 sm:h-8' />
    </button>
  );
};

export default SkillAddButton;
