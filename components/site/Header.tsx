"use client";

import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';

function Header() {

    const router = useRouter();

    return (
        <header className='flex items-center justify-between px-10 py-5 space-x-2 font-bold navBar'>
            <div className='flex items-center space-x-2'>
                <Image
                    src="/thutasann-blog.jpeg"
                    width={60}
                    height={60}
                    priority
                    quality={100}
                    alt="Thuta Sann blog"
                    className='object-cover rounded-lg cursor-pointer hover:shadow-lg'
                    onClick={() => router.push("/")}
                />
            </div>
            <div>
                <button
                    className='flex items-center px-5 py-3 text-sm text-center text-white rounded-full outline-none bg-primary-teal md:text-base'
                >
                    Subscribe for more Contents
                </button>
            </div>
        </header>
        
    )
}

export default Header