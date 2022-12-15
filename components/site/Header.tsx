"use client";

import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';

function Header() {

    const router = useRouter();

    return (
        <header className='px-2 py-5 space-x-2 font-bold navBar'>
            <div className='flex items-center justify-between px-5 mx-auto max-w-7xl'>
                <div className='flex items-center space-x-2'>
                    <Image
                        src="/thutasann-blog.jpeg"
                        width={90}
                        height={90}
                        priority
                        quality={100}
                        alt="Thuta Sann blog"
                        className='object-cover rounded-lg cursor-pointer hover:shadow-lg'
                        onClick={() => router.push("/")}
                    />
                </div>
                <div>
                    <button
                        className='flex items-center px-3 py-2 text-sm text-center text-white transition-all duration-150 ease-in-out rounded-full outline-none md:px-5 md:py-3 bg-primary-teal md:text-base hover:bg-secondary-teal hover:-translate-y-1 hover:shadow-lg'
                    >
                        Subscribe 
                    </button>
                </div>
            </div>

        </header>
        
    )
}

export default Header