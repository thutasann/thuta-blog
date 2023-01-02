"use client"

import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { fadeVariants } from '../../animations';
import { FaCopy } from 'react-icons/fa';

type Props = {
    alert : boolean;
    setAlert: any;
}

function Alert({ alert, setAlert}: Props) {

    useEffect(() => {
        setTimeout(() => {
            setAlert(false);
        }, 3000);
    }, []);

    return (
        <motion.div 
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
            duration: 0.75,
            ease: "easeOut",
            }}
            variants={fadeVariants}
            role="alert" className="-ml-2 md:ml-4 p-[10px] border border-primary-teal border-opacity-40 shadow-xl rounded-xl"
        >
            <div className="flex items-start gap-4">

                <span className="text-secondary-teal">
                    <FaCopy className='mt-[3px]'/>
                </span>

                <div className="flex-1 hidden md:block">
                    <p className="block text-[12px] text-opacity-50 font-[600]"> Copied To Clipboard </p>
                </div>

                <button className="hidden text-gray-500 transition hover:text-gray-600 md:block">
                <span className="sr-only">Dismiss popup</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="hidden w-6 h-6 md:block"
                        onClick={
                            () => setAlert(false)
                        }
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </motion.div>
    )
}

export default Alert