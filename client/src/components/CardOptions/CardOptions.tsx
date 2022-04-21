import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { DotsHorizontalIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';

const CardOptions = () => {
  return (
    <Popover className='relative'>
      {({ open }) => (
        <>
          <Popover.Button className='flex items-center justify-center rounded-full w-7 h-7 hover:bg-slate-400'>
            <DotsHorizontalIcon
              className={`${open ? '' : ''}
             h-6 w-6 text-white group-hover:text-opacity-80 transition ease-in-out duration-150`}
              aria-hidden='true'
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute right-0 z-10 mt-1 '>
              <div className='overflow-hidden rounded-lg shadow-lg '>
                <div className='flex flex-col p-2 space-y-2 bg-white '>
                  {/* Edit button */}
                  <button
                    type='button'
                    onClick={() => {}}
                    className='flex items-center px-3 py-1 rounded-md w-28 hover:cursor-pointer hover:bg-slate-300'
                  >
                    <PencilIcon className='w-4 h-4 ' />
                    <p className='ml-4 text-sm'>Edit</p>
                  </button>
                  {/* Delete button */}
                  <button
                    type='button'
                    onClick={() => {}}
                    className='flex items-center px-3 py-1 rounded-md w-28 hover:cursor-pointer hover:bg-slate-300'
                  >
                    <TrashIcon className='w-4 h-4 ' />
                    <p className='ml-4 text-sm'>Delete</p>
                  </button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default CardOptions;
