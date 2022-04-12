import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { XIcon, MenuIcon, StatusOnlineIcon, CogIcon } from '@heroicons/react/solid';
import { ReactComponent as BrandLogo } from '../../assets/svg/logo.svg';

// Import from React-router
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navigation = [
    { id: 1, name: 'Dashboard', href: '/dashboard', current: true },
    { id: 2, name: 'About', href: '/about', current: false },
  ];

  const classNames = (...classes: (false | null | undefined | string)[]) =>
    classes.filter(Boolean).join(' ');

  return (
    <Disclosure as='nav' className=''>
      {({ open }) => (
        <>
          <div className='w-screen px-2 mx-auto sm:px-6 lg:px-8'>
            <div className='relative inset-y-0 flex items-center justify-between h-16 '>
              {/* Dropdown button for small screen */}
              <div className='absolute left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center p-2 text-black rounded-md focus:outline-none '>
                  {open ? (
                    <XIcon className='block w-7 h-7' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block w-7 h-7' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>

              {/* Logo and navigation */}
              <div className='flex items-center justify-center flex-1 sm:justify-start'>
                <div className='flex items-center flex-shrink-0'>
                  <BrandLogo className='block w-auto h-10 fill-indigo-900 lg:hidden' />
                  <h1 className='hidden text-3xl font-black text-indigo-900 lg:block'>STICKI</h1>
                </div>
                <div className='hidden sm:block sm:ml-8'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <Link
                        to={item.href}
                        key={item.id}
                        className={classNames(
                          item.current
                            ? 'bg-indigo-900/90 text-white'
                            : 'hover:text-white hover:bg-black/60 text-black',
                          'text-sm px-2 py-1 rounded-md font-semibold'
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Notification button and profile */}
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 space-x-4 sm:inset-auto sm:static sm:pr-0 sm:ml-6'>
                <button
                  type='button'
                  className='p-1 text-black rounded-full hover:bg-black/60 hover:text-white'
                >
                  <StatusOnlineIcon className='w-6 h-6' />
                </button>
                <button
                  type='button'
                  className='p-1 text-black rounded-full hover:bg-black/60 hover:text-white'
                >
                  <CogIcon className='w-6 h-6' />
                </button>

                {/* Profile dropdown */}
                <Menu as='div' className='relative'>
                  <div>
                    <Menu.Button className='flex bg-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-black/60 focus:ring-offset-1 focus:ring-offset-gray-300'>
                      <img
                        className='object-contain w-8 h-8 rounded-full '
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png'
                        alt='Profile avatar'
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 w-56 py-2 mt-4 border rounded-md shadow-lg border-white/60 border-1 bg-white/40 focus:outline-none'>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            className={classNames(
                              active ? 'bg-black/30 text-white' : '',
                              'block text-base px-4 py-1 rounded-sm font-semibold'
                            )}
                            to='/profile'
                          >
                            Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            className={classNames(
                              active ? 'bg-black/30 text-white' : '',
                              'block text-base px-4 py-1 rounded-sm w-full text-left font-semibold'
                            )}
                          >
                            Log out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className='sm:hidden'>
            <div className='w-full px-2 pt-2 pb-3'>
              {navigation.map((item) => (
                <Disclosure.Button
                  className={classNames(
                    item.current
                      ? 'bg-indigo-900/90 text-white border-b-0'
                      : ' hover:text-white hover:bg-black/60',
                    'mt-2 block py-2 px-3  w-full  font-semibold rounded-md'
                  )}
                >
                  <Link to={item.href} key={item.id}>
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
