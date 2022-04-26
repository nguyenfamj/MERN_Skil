//
import { skillModel, statusEnum } from '../../interfaces/skillApiResponse';
import { skillInput } from '../../interfaces/formInputs';

//
import CardOptions from '../CardOptions/CardOptions';

//
import { formatDistanceToNow } from 'date-fns';

//
import { GlobeIcon } from '@heroicons/react/outline';

// Import from RTK
import { useAppDispatch } from '../../hooks/rtkHook';
import { useDeleteSkillMutation } from '../../redux/services/skillApi';
import { setNotification } from '../../redux/slices/appSlice';

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
  // Edit Button
  const handleButtonWithData = (): void => {
    handleEditButton({ skill: formInitialState, skillId: skill._id });
    console.log(formInitialState.status);
  };

  // Delete Button
  const dispatch = useAppDispatch();
  const [deleteSkill] = useDeleteSkillMutation();

  const handleDeleteButton = async (): Promise<void> => {
    if (window.confirm(`Are you sure you want to delete ${skill.title}?`)) {
      try {
        const response = await deleteSkill({ _id: skill._id }).unwrap();
        dispatch(setNotification({ title: 'Deleted successfully', message: response.message }));
      } catch (error) {
        dispatch(setNotification({ title: 'Error!', message: error?.data.message }));
      }
    }
  };

  // Function to control UI from tailwindCSS
  function classNames(...classes: (false | null | undefined | string)[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <>
      <div
        className={classNames(
          'h-48 rounded-lg bg-gradient-to-br from-white/70 via-white/60 to-white/5 ring-2 backdrop-blur-lg backdrop-filter relative sm:w-full ',
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
          <CardOptions
            handleButtonWithData={handleButtonWithData}
            handleDeleteButton={handleDeleteButton}
          />
        </div>
        <div className='px-4 mt-3 '>
          <div className='inline-flex flex-col '>
            <h2 className='text-2xl font-semibold text-indigo-900 capitalize break-words break-all'>
              {skill.title}
            </h2>
            <div className='px-2 py-1 rounded-md bg-slate-300/60 max-w-max'>
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
    </>
  );
};

export default SkillCard;
