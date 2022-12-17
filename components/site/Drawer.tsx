import React from "react";
import { XCircleIcon } from "@heroicons/react/24/solid"


type Props = {
    children: any;
    openDrawer: any;
    setOpenDrawer: any;
}

export default function Drawer({ children, openDrawer, setOpenDrawer }: Props) {
    return (
        <main
        className={
                " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (openDrawer
                ? " transition-opacity opacity-100 duration-700 translate-x-0"
                : " transition-all delay-500 opacity-0 translate-x-full  ")
            }
        >
            <section
                className={
                " w-screen max-w-lg right-0 absolute bg-white dark:bg-[#272e39] text-primary-black dark:text-gray-100  h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                (openDrawer ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <article className="relative flex flex-col w-screen h-full max-w-lg p-5 space-y-6 overflow-y-scroll">
                    <header className='text-3xl font-[700] flex items-center justify-between'>
                        <h1>Search</h1>
                        <XCircleIcon 
                            className='w-8 h-8 text-gray-900 cursor-pointer dark:text-gray-300 hover:text-gray-400 dark:hover:text-white'
                            onClick={() => {
                                setOpenDrawer(false);
                            }}
                        />
                    </header>
                    {children}
                </article>
            </section>
            <section
                className={`w-screen h-full cursor-pointer`}
                onClick={() => {
                    setOpenDrawer(false);
                }}
            ></section>
        </main>
    );
}
