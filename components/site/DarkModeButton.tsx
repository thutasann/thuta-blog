"use client";

import React from 'react'
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

function DarkModeButton() {

    const [ mounted, setMounted ] = useState<boolean>(false); // to wait screen mount
    const { systemTheme, theme, setTheme  } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted){
        return null;
    }

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <div className='transition-all duration-700'>
            {
                currentTheme === "dark" ?(
                    <SunIcon
                        className='w-8 h-8 text-yellow-500 transition-all duration-300 ease-in-out cursor-pointer hover:scale-110 transform-gpu'
                        onClick={() => setTheme("light")}
                    />
                ) : (
                    <MoonIcon
                        className='w-8 h-8 transition-all duration-300 ease-in-out cursor-pointer text-primary-black hover:scale-110 transform-gpu'
                        onClick={() => setTheme("dark")}
                    />
                )
            }
        </div>
    )
}

export default DarkModeButton