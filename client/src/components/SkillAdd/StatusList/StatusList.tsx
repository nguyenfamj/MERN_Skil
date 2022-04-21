import { useState, Fragment, Dispatch, SetStateAction, useEffect } from 'react';

// Import components from HeadlessUI and heroicons
import { Listbox, Transition } from '@headlessui/react';
import { SelectorIcon, CheckIcon } from '@heroicons/react/outline';

// Import interfaces
import { statusEnum } from '../../../interfaces/skillApiResponse';
import { skillInput } from '../../../interfaces/formInputs';

interface propTypes {
  setFormStates: Dispatch<SetStateAction<skillInput>>;
}

const StatusList = ({ setFormStates }: propTypes) => {
  const statusList: { name: statusEnum }[] = [
    {
      name: statusEnum.Planned,
    },
    {
      name: statusEnum.InProgress,
    },
    {
      name: statusEnum.Done,
    },
  ];

  const [selected, setSelected] = useState<{ name: statusEnum }>(statusList[0]);

  useEffect(() => {
    setFormStates((prevState) => ({ ...prevState, status: selected.name }));
  }, [selected]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className='relative mt-1'>
        <Listbox.Button className='relative w-full text-left bg-white border-2 cursor-pointer border-zinc-400 rounded-xl sm:p-3 sm:text-sm'>
          <span className='block truncate'>{selected.name}</span>
          <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
            <SelectorIcon className='w-5 h-5 text-gray-400' aria-hidden='true' />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options className='absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {statusList.map((status, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `cursor-pointer select-none relative py-2 pl-10 pr-4 ${
                    active ? 'text-white bg-indigo-600' : 'text-gray-900'
                  }`
                }
                value={status}
              >
                <>
                  <span>{status.name}</span>
                </>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default StatusList;
