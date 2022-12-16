"use client";

import React, {Fragment} from 'react'
import { Dialog, Transition  } from '@headlessui/react';
import { ExclamationCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';


type Props = {
    isOpen: any;
    setIsOpen: any;
}

function SearchModal({ isOpen, setIsOpen } : Props) {

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
                                </Dialog.Title>
                                <div className="relative mt-2 group">
                                    <input
                                        className='searchInput'
                                    />
                                    <MagnifyingGlassIcon 
                                        className='absolute right-0 w-6 h-6 text-primary-black -top-1' 
                                    />
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

export default SearchModal