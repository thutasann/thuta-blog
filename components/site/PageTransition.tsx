"use client"

import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

type Props ={
    children: any
}

function PageTransition({ children } : Props) {

    const route = usePathname();
    const firstRender = useRef(true);
    const [ completeTransition, setCompleteTransition ] = useState<boolean>(false);

    useEffect(() => {
        firstRender.current = false;
    }, []);

    return (
        <AnimatePresence mode='wait' key={route}  initial={!firstRender.current}>
            <>
                <motion.div
                    className='transition-bg'
                    initial={{ display: 'block'}}
                    animate={{ display: 'none'}}
                    onAnimationComplete={() => setCompleteTransition(true)}
                >
                    <motion.div
                        className='transition-item'
                        initial={{ x: -500 }}
                        animate={{ x: 4000 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        onAnimationStart={() => setCompleteTransition(false)}
                    />
                </motion.div>

                {
                    completeTransition && children
                }
            </>
        </AnimatePresence>
    )
}

export default PageTransition