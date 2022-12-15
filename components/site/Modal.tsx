import React, {Fragment} from 'react'
import { Dialog, Transition  } from '@headlessui/react';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';


type Props = {
    isOpen: any;
    setIsOpen: any;
}

function Modal({ isOpen, setIsOpen } : Props) {

    const closeModal = () =>{
        setIsOpen(false);
    }

    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 backdrop-filter backdrop-blur-sm bg-opacity-10" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center min-h-full p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title
                                as="h3"
                                className="flex items-center space-x-2 text-lg font-medium leading-6 text-gray-700"
                            >
                                Still In Beta <ExclamationCircleIcon className='w-8 h-8'/>
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    Subscription Plan is still in Beta Version.
                                    This Feature will be included in the Future Plans.
                                </p>
                            </div>

                            <div className="mt-4">
                                <button
                                type="button"
                                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-100 border border-transparent rounded-md bg-primary-teal hover:bg-secondary-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                                >
                                Got it, thanks!
                                </button>
                            </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default Modal