import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { errorAlert } from '../../interfaces/authApiResponse';

//
import { useAppDispatch } from '../../hooks/rtkHook';
import { setNotification } from '../../redux/slices/appSlice';

const GlassDialog = ({ title, message }: errorAlert) => {
  const [isOpen, setIsOpen] = useState(true);
  const closeMessage = () => setIsOpen(false);

  //
  const dispatch = useAppDispatch();

  setTimeout(() => {
    setIsOpen(false);
    dispatch(setNotification({ title: '', message: '' }));
  }, 5000);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='fixed z-20 bottom-16 right-6' onClose={closeMessage}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-700'
          enterFrom='translate-x-96'
          enterTo='translate-x-0'
          leave='ease-in duration-200'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <div className='p-4 overflow-hidden bg-white border rounded-lg border-white/30 w-80'>
            <Dialog.Title as='h2' className='text-sm font-semibold text-sky-500'>
              {title}
            </Dialog.Title>
            <Dialog.Description className='mt-1 text-sm'>{message}</Dialog.Description>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default GlassDialog;
