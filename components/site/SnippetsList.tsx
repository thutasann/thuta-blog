"use client"

import React from 'react'
import Sidebar from './Sidebar'
import {HiOutlineCode} from 'react-icons/hi'; 
import { AiOutlineCalendar, AiOutlineTags } from 'react-icons/ai';
import Carousel from 'react-elastic-carousel'
import { CodeCategory, Snippet } from '../../types/typings';
import { useDispatch, useSelector } from 'react-redux';
import { chooseTag, selectTag } from '../../slices/tagSlice';
import { useRouter } from 'next/navigation';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 4 }
];

type Props = {
    snippets: Snippet[],
    tags: CodeCategory[],
}

function SnippetsList({ snippets, tags } :Props) {

    const dispatch = useDispatch();
    const router = useRouter();

    //@ts-ignore
    const tag = useSelector(selectTag);

    const handleSelect = (name?: string) => {
        dispatch(chooseTag({
            name: name
        }))
    }

    // @ts-ignore
    const filteredSnippets = tag?.name === "all" || tag === null  ? snippets : snippets.filter((item) => item.tags.find(val => val.title === tag?.name ));

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
                    <div 
                        className={`w-full px-4 py-4 text-center bg-transparent border rounded-full border-primary-teal`}
                        onClick={
                            () => handleSelect("all")
                        }
                    >
                        All
                    </div>
                    {tags.map((item, index) => (
                        <div 
                            key={index} 
                            className={`w-full px-4 py-4 text-center bg-transparent border rounded-full border-primary-teal`}
                            onClick={
                                () => handleSelect(item.title)
                            }
                        >
                            {item.title}
                        </div>
                    ))}
                </Carousel>
            </div>
            <h2 className='font-[700] text-2xl flex md:hidden items-center'>
                <AiOutlineTags className='w-6 h-6 mr-3'/>
                {/* @ts-ignore */}
                Tags : {tag?.name ? tag?.name : tag?.name === "all" ? "All" : "All"}
            </h2>

            {/* Main Content */}
            <div className='w-full pl-0 md:pl-7'>
                {
                    filteredSnippets.map((snippet, index) => (
                        <div 
                            className='snippet' 
                            key={index}
                            onClick={
                                () => router.push(`/snippets/${snippet.slug.current}`)
                            }
                        >
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