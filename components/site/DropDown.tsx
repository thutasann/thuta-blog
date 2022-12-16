"use client";

import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useRouter } from 'next/navigation';
import { Bars3Icon } from '@heroicons/react/24/solid';


export default function DropDown() {

    const router = useRouter();

    return (
        <div className='inline md:hidden'>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button aria-label="Menu Toggle Button" className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <Bars3Icon className='w-6 h-6 text-primary-black dark:text-gray-300'/>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute left-0 w-56 mt-2 text-white origin-top-right bg-gray-600 border-2 border-gray-300 divide-y divide-gray-100 rounded-md shadow-lg dark:bg-primary-black border-opacity-20">
                        <div className="px-1 py-2">
                            <Menu.Item>
                                <button
                                    className={`text-gray-300
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-black hover:bg-opacity-30`}
                                    onClick={() => router.push("/")}
                                >
                                    Home
                                </button>
                            </Menu.Item>
                            <Menu.Item>
                                <button
                                    className={`text-gray-300
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-black hover:bg-opacity-30`}
                                    onClick={() => router.push("/blogs/")}
                                >
                                    Blogs
                                </button>
                            </Menu.Item>
                            <Menu.Item>
                                <button
                                    className={`text-gray-300
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-black hover:bg-opacity-30`}
                                    onClick={() => router.push("/contact/")}
                                >
                                    Contact
                                </button>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
