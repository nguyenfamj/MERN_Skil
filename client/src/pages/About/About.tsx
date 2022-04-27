const About = () => {
  const featuresList: { id: number; name: string }[] = [
    { id: 1, name: 'CRUD functions for manipulate skill card' },
    { id: 2, name: 'Built-from-scratch login/register form with validation' },
    { id: 3, name: 'Skill categorization (3 types Planned | In progress | Done)' },
    { id: 4, name: 'Input form for adding/editing skill as an overlay' },
    { id: 5, name: 'Authentication with protected route and JWT token' },
    { id: 6, name: 'Notification and alert on action' },
    { id: 7, name: 'Stay signed in after exiting browser' },
    { id: 8, name: 'Highly interactive, responsive UI' },
  ];

  const technologyList: { id: string; title: string; data: string[] }[] = [
    {
      id: 'front-end',
      title: 'Front-end',
      data: [
        'React',
        'TypeScript',
        'Redux-toolkit',
        'Redux-toolkit query',
        'Redux-persist',
        'Tailwind CSS',
        'HeadlessUI',
      ],
    },
    { id: 'back-end', title: 'Back-end', data: ['ExpressJS', 'MongoDB', 'Mongoose', 'Argon2'] },
  ];

  return (
    <div className='w-screen px-6 mt-4 sm:pr-8'>
      <div className='flex'>
        <h1 className='text-3xl font-bold text-white drop-shadow-lg'>About</h1>
      </div>
      <div className='mt-8 space-y-10 sm:space-y-8'>
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold text-indigo-900'>Project overview</h2>
          <div className='text-base font-normal leading-relaxed text-justify text-zinc-600'>
            <p>
              SKIL is an end-to-end personal project, developed with MERN stack. It is fully
              functional and interactive, with 100% customized style inspired from Glassmorphism
              design style.
              <br />
              <br />
              The initial idea of the project is to create a web application which allows users to
              add and store some kind of "Sticky note" as a "skill" card. Each card will contain
              some information related to that skill, makes it easier to access all the information
              later on. Main features of the app will be listed below.
            </p>
          </div>
        </div>
        <div className='space-y-2'>
          <h2 className='text-xl font-semibold text-indigo-900'>Project features</h2>
          <div>
            <ul className='grid grid-cols-1 text-justify list-disc list-inside text-zinc-600 sm:grid-cols-2'>
              {featuresList.map((feature) => (
                <li key={feature.id} className='p-0 mt-3 sm:p-1'>
                  {feature.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='space-y-6'>
          <h2 className='text-xl font-semibold text-indigo-900'>Technology</h2>
          <div className='grid grid-cols-1 space-y-5 sm:grid-cols-2'>
            {technologyList.map((type) => (
              <div className='' key={type.id}>
                <div className='font-bold'>
                  <h3>{type.title}</h3>
                </div>
                <div className='mt-3 space-y-2 sm:mt-6 text-zinc-600'>
                  {type.data.map((technology) => (
                    <h4 key={technology}>{technology}</h4>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
