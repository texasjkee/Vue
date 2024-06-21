import { Dialog, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';

export interface ModalProps {
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
  title: string;
}

export default function Modal(props: ModalProps) {
  const { children, isOpen, onClose, title } = props;
  const onCloseModal = () => {
    onClose && onClose();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onCloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-3xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h4"
                    className="text-lg font-medium leading-6 text-gray-900 flex justify-between"
                  >
                    {title}
                    <button
                      className="hover:bg-lightBlue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blueMoon"
                      onClick={onClose}
                    >
                      <XMarkIcon
                        className="cursor-pointer"
                        height={24}
                        width={24}
                      />
                    </button>
                  </Dialog.Title>
                  <div>{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
