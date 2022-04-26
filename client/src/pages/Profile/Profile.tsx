import { useAppSelector } from '../../hooks/rtkHook';
import { format } from 'date-fns';

const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <section className='w-screen px-2 pr-4 mt-4 sm:px-6 sm:pr-8'>
      <div className='flex'>
        <h1 className='text-3xl font-bold text-white '>Profile</h1>
      </div>
      <div className='flex items-center justify-center w-full mt-5 '>
        <div className=' sm:w-[450px] h-[500px] rounded-xl bg-white/30 shadow-lg border-b border-r border-white/60 flex-col flex items-center px-6 w-full'>
          <div className='flex items-center justify-center w-full border-b border-black h-14'>
            <h1 className='text-xl font-bold text-indigo-900'>User info</h1>
          </div>
          <div className='w-full mt-16 space-y-4'>
            <div className='flex flex-col space-y-1'>
              <h3 className='text-base font-semibold text-gray-500 '>Username:</h3>
              <h3 className='text-base text-black'>{user?.username}</h3>
            </div>
            <div className='flex flex-col space-y-1'>
              <h3 className='text-base font-semibold text-gray-500'>Firstname:</h3>
              <h3 className='text-base text-black'>{user?.firstname}</h3>
            </div>
            <div className='flex flex-col space-y-1'>
              <h3 className='text-base font-semibold text-gray-500'>Lastname:</h3>
              <h3 className='text-base text-black'>{user?.lastname}</h3>
            </div>
            <div className='flex flex-col space-y-1'>
              <h3 className='text-base font-semibold text-gray-500'>Joined since:</h3>
              <h3 className='text-base text-black'>
                {format(new Date(user.createdAt), 'dd.MM.yyyy')}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
