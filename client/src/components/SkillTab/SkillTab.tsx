import { skillModel } from '../../interfaces/skillApiResponse';

// Import components
import { Tab } from '@headlessui/react';
import SkillCard from '../SkillCard/SkillCard';
import { skillInput } from '../../interfaces/formInputs';

interface PropTypes {
  skillArray: skillModel[] | undefined;
  handleEditButton: ({ skill, skillId }: { skill: skillInput; skillId: string }) => void;
}

const SkillTab = ({ skillArray, handleEditButton }: PropTypes) => {
  return (
    <Tab.Panel className='mt-6 '>
      <div className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        {skillArray &&
          skillArray.map((skill) => (
            <SkillCard key={skill._id} skill={skill} handleEditButton={handleEditButton} />
          ))}
      </div>
    </Tab.Panel>
  );
};

export default SkillTab;
