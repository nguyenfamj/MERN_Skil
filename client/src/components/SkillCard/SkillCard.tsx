//
import { skillModel, statusEnum } from '../../interfaces/skillApiResponse';
import { skillInput } from '../../interfaces/formInputs';

//
import CardOptions from '../CardOptions/CardOptions';

//
import { formatDistanceToNow } from 'date-fns';

//
import { GlobeIcon } from '@heroicons/react/outline';

interface PropTypes {
  skill: skillModel;
  handleEditButton: ({ skill, skillId }: { skill: skillInput; skillId: string }) => void;
}

const SkillCard = ({ skill, handleEditButton }: PropTypes) => {
  // Initial State for form
  const formInitialState: skillInput = {
    title: skill.title,
    description: skill.description,
    url: skill.url,
    status: skill.status,
  };

  const handleButtonWithData = (): void => {
    handleEditButton({ skill: formInitialState, skillId: skill._id });
  };

  // Function to control UI from tailwindCSS
  function classNames(...classes: (false | null | undefined | string)[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <>
      <div
        className={classNames(
          'h-48 rounded-lg bg-gradient-to-br from-white/70 via-white/60 to-white/5 ring-2 backdrop-blur-lg backdrop-filter relative sm:w-full',
          skill.status === statusEnum.Planned
            ? ' ring-rose-300'
            : skill.status === statusEnum.InProgress
            ? 'ring-orange-300 '
            : skill.status === statusEnum.Done
            ? 'ring-green-300'
            : ''
        )}
      >
        <div
          className={classNames(
            'h-8 rounded-t-lg flex items-center justify-between px-4',
            skill.status === statusEnum.Planned
              ? ' bg-rose-300'
              : skill.status === statusEnum.InProgress
              ? 'bg-orange-300 '
              : skill.status === statusEnum.Done
              ? 'bg-green-300'
              : ''
          )}
        >
          <h2 className='font-semibold text-white'>{skill.status}</h2>
          <CardOptions handleButtonWithData={handleButtonWithData} />
        </div>
        <div className='px-4 mt-3 '>
          <div className='flex items-center'>
            <h2 className='text-2xl font-semibold text-indigo-900 capitalize'>{skill.title}</h2>
            <div className='p-1 ml-4 rounded-md bg-slate-300/60'>
              <p className='text-xs'>{formatDistanceToNow(new Date(skill.createdAt))}</p>
            </div>
          </div>
          <p className='mt-2 text-sm text-justify'>{skill.description}</p>
          <a
            title={skill.url}
            href={skill.url}
            target='_blank'
            rel='noreferrer'
            className='absolute bottom-0 py-3'
          >
            <GlobeIcon className='text-indigo-900 rounded-full w-7 h-7 hover:text-black hover:cursor-pointer hover:ring-2 hover:ring-black/70' />
          </a>
        </div>
      </div>

      {/* <Transition as={Fragment} show={formOpen}>
        <Dialog as='div' className='fixed inset-0 z-10' onClose={closeForm}>
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
                  initialStates={formInitialState}
                  formTitle='Create Skill'
                  closeModal={closeForm}
                  mutationFn={updateSkill}
                  updateId={skill._id}
                  setIsRefetch={setIsRefetch}
                />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition> */}
    </>
  );
};

export default SkillCard;
