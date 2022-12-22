'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../../animations';

export const TypingText = ({ title, textStyles } : any) => (
    <motion.p
        variants={textContainer}
        className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
    >
        {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
            {/* @ts-ignore */}
            {letter}
        </motion.span>
        ))}
    </motion.p>
);
