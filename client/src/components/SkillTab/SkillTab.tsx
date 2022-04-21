import { skillModel } from '../../interfaces/skillApiResponse';

// Import components
import { Tab } from '@headlessui/react';
import SkillCard from '../SkillCard/SkillCard';

interface PropTypes {
  skillArray: skillModel[] | undefined;
}

const SkillTab = ({ skillArray }: PropTypes) => {
  return (
    <Tab.Panel className='mt-6 '>
      <div className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        {skillArray && skillArray.map((skill) => <SkillCard key={skill._id} skill={skill} />)}
      </div>
    </Tab.Panel>
  );
};

export default SkillTab;
