"use client"

import React from 'react'
import Sidebar from './Sidebar'
import {HiOutlineCode} from 'react-icons/hi'; 
import { AiOutlineCalendar, AiOutlineTags } from 'react-icons/ai';
import Carousel from 'react-elastic-carousel'
import { CodeCategory, Snippet } from '../../types/typings';

const breakPoints = [
    { width: 2, itemsToShow: 2 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 4 }
];

type Props = {
    snippets: Snippet[],
    tags: CodeCategory[]
}

function SnippetsList({ snippets, tags } :Props) {
    return (
        <section className='relative flex flex-col w-full space-y-7 md:space-y-0 md:flex-row'>
            {/* Sidebar */}
            <div className='w-[30%] hidden md:block'>
                <Sidebar tags={tags}/>
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
                    snippets.map((snippet, index) => (
                        <div className='snippet' key={index}>
                            <h2 className='flex flex-col items-start md:items-center md:flex-row'>
                                <HiOutlineCode className='mb-3 mr-3 md:mb-0'/>
                                {snippet.title}
                            </h2>
                            <p>{snippet.description}</p>
                            
                            <div className='flex items-center mt-4 space-x-4'>

                                {/* Date */}
                                <span className='flex items-center  text-[15px] text-primary-black dark:text-gray-400 text-opacity-80'>
                                    <AiOutlineCalendar className='mr-1'/>  
                                    {
                                        new Date(snippet._createdAt).toLocaleDateString("en-US", {
                                            day: "numeric",
                                            month: "long",
                                            year: 'numeric'
                                        })
                                    }
                                </span>

                                {/* Tags */}
                                {snippet.tags.map(category => (
                                    <div
                                        key={category._id}
                                        className="flex items-center text-primary-black dark:text-gray-400 text-opacity-80"
                                    >
                                        <AiOutlineTags className='mr-1'/> {category.title}
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))
                }
            </div>
            
        </section>
    )
}

export default SnippetsList