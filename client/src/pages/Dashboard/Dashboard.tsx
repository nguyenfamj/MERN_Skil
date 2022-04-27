import { useEffect, useState, Fragment } from 'react';
import { Tab, Transition, Dialog } from '@headlessui/react';

// Import from RTK query
import { useGetSkillsQuery, useUpdateSkillMutation } from '../../redux/services/skillApi';

//
import { statusEnum, skillModel } from '../../interfaces/skillApiResponse';
import { skillInput } from '../../interfaces/formInputs';

// Import components
import SkillTab from '../../components/SkillTab/SkillTab';
import SkillAdd from '../../components/SkillAdd/SkillAdd';
import SkillForm from '../../components/SkillForm/SkillForm';

const Dashboard = () => {
  type panelTypes = { id: number; name: string | statusEnum; data: skillModel[] | undefined };

  const { data, isFetching, isLoading, error } = useGetSkillsQuery();
  const [tabPanels, setTabPanels] = useState<panelTypes[]>([
    { id: 1, name: 'All skills', data: [] },
    { id: 2, name: statusEnum.Planned, data: [] },
    { id: 3, name: statusEnum.InProgress, data: [] },
    { id: 4, name: statusEnum.Done, data: [] },
  ]);

  useEffect(() => {
    const prepareArray = async (): Promise<void> => {
      const duplicatedTabPanels = [...tabPanels];

      // Set default value
      duplicatedTabPanels[0].data = data?.skills;
      duplicatedTabPanels[1].data = [];
      duplicatedTabPanels[2].data = [];
      duplicatedTabPanels[3].data = [];

      await data?.skills.forEach((skill) => {
        skill.status === statusEnum.Planned
          ? duplicatedTabPanels[1].data?.push(skill)
          : skill.status === statusEnum.InProgress
          ? duplicatedTabPanels[2].data?.push(skill)
          : duplicatedTabPanels[3].data?.push(skill);
      });

      setTabPanels(duplicatedTabPanels);
    };
    prepareArray();
  }, [data]);

  // State for Edit form
  const [editForm, setEditForm] = useState<{ isOpen: boolean; skill: skillInput; skillId: string }>(
    {
      isOpen: false,
      skill: {
        title: '',
        description: '',
        url: '',
        status: statusEnum.Planned,
      },
      skillId: '',
    }
  );
  // Handle open and close form
  const closeForm = (): void => {
    setEditForm({ ...editForm, isOpen: false });
  };
  // Handle edit function with API RTK Query
  const [updateSkill] = useUpdateSkillMutation();

  const handleEditButton = ({ skill, skillId }: { skill: skillInput; skillId: string }): void => {
    setEditForm({ isOpen: true, skill, skillId });
  };

  // Function to control UI from tailwindCSS
  function classNames(...classes: (false | null | undefined | string)[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <section className='w-screen px-2 pr-4 mt-4 sm:px-6 sm:pr-8 '>
      <div className='flex'>
        <h1 className='text-3xl font-bold text-white drop-shadow-lg'>Dashboard</h1>
      </div>
      <div className='mt-8 '>
        <Tab.Group>
          <div className='sm:flex sm:items-center sm:justify-between '>
            <Tab.List className='flex justify-around py-1 rounded-lg bg-black/10 sm:w-[560px] w-[300px]'>
              {tabPanels.map((tab) => (
                <Tab
                  key={tab.id}
                  className={({ selected }) =>
                    classNames(
                      'px-2 py-1 rounded-md sm:text-base sm:w-32 text-sm',
                      selected
                        ? 'bg-black/50 text-white shadow-md'
                        : 'hover:bg-white/30 text-white hover:text-black'
                    )
                  }
                >
                  {tab.name}
                </Tab>
              ))}
            </Tab.List>
            <SkillAdd />
          </div>

          {isFetching || isLoading ? (
            <div className='flex items-center justify-center h-80'>
              <svg
                role='status'
                className='w-12 h-12 text-transparent animate-spin fill-indigo-900 '
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='currentColor'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentFill'
                />
              </svg>
            </div>
          ) : error ? (
            <div className='flex items-center justify-center h-80'>
              <p className='text-base text-indigo-900'>Couldn't load data, please try again</p>
            </div>
          ) : data?.skills.length === 0 ? (
            <div className='flex items-center justify-center h-80'>
              <p className='text-base text-indigo-900'>
                Couldn't find any skills, please add more by clicking plus(+) button
              </p>
            </div>
          ) : (
            <Tab.Panels>
              {tabPanels.map((panel) => (
                <SkillTab
                  skillArray={panel.data}
                  key={panel.id}
                  handleEditButton={handleEditButton}
                />
              ))}
            </Tab.Panels>
          )}
        </Tab.Group>
      </div>

      {/* Edit Form */}
      <Transition as={Fragment} show={editForm.isOpen}>
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
                  initialStates={editForm.skill}
                  formTitle='Edit skill'
                  closeModal={closeForm}
                  mutationFn={updateSkill}
                  updateId={editForm.skillId}
                />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default Dashboard;
