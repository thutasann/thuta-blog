"use client"

import React from 'react'
import Sidebar from './Sidebar'
import {HiOutlineCode} from 'react-icons/hi'; 
import { AiOutlineCalendar } from 'react-icons/ai';
import Carousel from 'react-elastic-carousel'

let arr = [1,2,3,4,5];

const breakPoints = [
    { width: 2, itemsToShow: 2 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 4 }
];

function SnippetsList() {
    return (
        <section className='relative flex flex-col w-full space-y-7 md:space-y-0 md:flex-row'>
            {/* Sidebar */}
            <div className='w-[30%] hidden md:block'>
                <Sidebar/>
            </div>
            

            {/* Carrousel */}
            <div className='block w-full mb-7 md:hidden'>
                {/* @ts-ignore */}
                <Carousel breakPoints={breakPoints} pagination={false}>
                    {[1,3,4,5,6].map((i, index) => (
                        <div key={index} className="px-4 cateBtn">
                            NextJs
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Main Content */}
            <div className='w-full pl-0 md:pl-7'>
                {
                    arr.map((i) => (
                        <div className='snippet' key={i}>
                            <h2 className='flex flex-col items-start md:items-center md:flex-row'>
                                <HiOutlineCode className='mb-3 mr-3 md:mb-0'/>
                                How to write effective Router Helper in NextJS.
                            </h2>
                            <p>In this Snippet, router helper in Next js will be written as Custom Hook </p>
                            <span className='flex items-center mt-4 text-[15px] text-primary-black dark:text-gray-400 text-opacity-80'>
                                <AiOutlineCalendar className='mr-3'/>  December 19, 2022
                            </span>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default SnippetsList