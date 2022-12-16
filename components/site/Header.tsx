"use client";

import React, {useState} from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Modal from './Modal';
import DarkModeButton from './DarkModeButton';
import Link from 'next/link';
import Menu from './DropDown';


function Header() {

    const [isOpen ,setIsOpen] = useState<boolean>(false);
    const router = useRouter();

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <header className='px-2 py-2 space-x-2 font-bold navBar z-[9999]'>
            <div className='flex items-center justify-between px-5 mx-auto max-w-7xl'>
                <div className='flex items-center space-x-2'>
                    <Image
                        src="/thutasann-blog.jpeg"
                        width={85}
                        height={85}
                        priority
                        quality={100}
                        alt="Thuta Sann blog"
                        className='object-cover rounded-lg cursor-pointer hover:shadow-lg'
                        onClick={() => router.push("/")}
                    />
                </div>
                <div className='items-center hidden px-4 space-x-5 md:flex text-md text-primary-black dark:text-gray-300'>
                    <Link href={"/"} className="navLink">
                        Home
                    </Link>
                    <Link href={"/blogs/"} className="navLink">
                        Blogs
                    </Link>
                    <Link href={"/contact/"} className="navLink">
                        Contact
                    </Link>
                </div>
                
                <Menu/>
                
                <div className='flex items-center space-x-3'>
                    <DarkModeButton/>
                    
                    <button
                        className='flex items-center px-3 py-2 text-sm text-center text-white transition-all duration-300 ease-in-out rounded-full outline-none md:px-5 md:py-3 bg-primary-teal md:text-base hover:bg-secondary-teal hover:scale-105 hover:shadow-lg'
                        onClick={openModal}
                    >
                        Subscribe 
                    </button>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </header>
        
    )
}

export default Header