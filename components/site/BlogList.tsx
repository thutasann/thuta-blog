"use client";

import React from 'react'
import { Category, Post } from '../../types/typings'
import Image from "next/image"
import urlFor from '../../utils/urlFor'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import ClientSideRoute from './ClientSideRoute'
import Categories from './Categories'
import { useSelector } from 'react-redux'
import { selectCate } from '../../slices/categorySlice'
import NoItem from './NoItem';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { fadeVariants } from '../../animations';

type Props = {
    posts: Post[],
    categories?: Category[],
    isHidden?: boolean,
    title: string,
}


function BlogList({posts, isHidden, title, categories}: Props) {
    
    const category  = useSelector(selectCate);
    const route = usePathname();
    const router = useRouter();

    // @ts-ignore
    const filteredPosts = category?.name === "all" || isHidden || category === null ? posts : posts.filter((post) => post.categories.find(cate => cate.title === category?.name ));

    return (
        <div>
            <div className='relative flex flex-col items-start justify-between mb-3 md:items-center md:flex-row'>
                <h1 className='pageTitle'>{title}</h1>
                <div className='w-full overflow-y-auto md:w-auto cateContainer'>
                    <Categories
                        categories={categories}
                        isHidden={isHidden}
                    />      
                </div>
            </div>
            <hr className={`mb-10 border-primary-teal`} />
            
            <div className={`grid grid-cols-1 gap-10 pb-24 ${filteredPosts?.length > 0 ? "md:grid-cols-2" : "md:grid-cols-1"} gap-y-16`}>   
                {
                    filteredPosts?.length > 0 ?(
                        filteredPosts?.map(post => (
                            <ClientSideRoute
                                key={post._id}
                                route={`blogs/${post.slug.current}`}
                            >
                                <motion.div 
                                    className="flex flex-col cursor-pointer group"
                                    key={route}
                                    initial="initialState"
                                    animate="animateState"
                                    exit="exitState"
                                    transition={{
                                        duration: 0.75,
                                        ease: "easeOut",
                                    }}
                                    variants={fadeVariants}
                                >
                                    <div className='relative w-full transition-transform duration-500 ease-in-out h-80 drop-shadow-xl'>
                                        <Image
                                            className="object-cover object-center rounded-[20px] lg:object-center"
                                            src={urlFor(post.mainImage).url()}
                                            loading="eager"
                                            placeholder='blur'
                                            blurDataURL={urlFor(post.mainImage).url()}
                                            alt={post.author.name}
                                            fill
                                        />
                                        <div className='absolute bottom-0 flex justify-between w-full p-5 text-white bg-black rounded-bl-[20px] rounded-br-[20px] bg-opacity-20 backdrop-blur-lg drop-shadow-full'>
                                            <div>
                                                <p className='font-bold'>{post.title}</p>
                                                <p className='text-left'>
                                                    {
                                                        new Date(post._createdAt).toLocaleDateString("en-US", {
                                                            day: "numeric",
                                                            month: "long",
                                                            year: "numeric"
                                                        })
                                                    }
                                                </p>
                                            </div>
                                            <div className='flex flex-col items-center md:flex-row gap-y-2 md:gap-x-2'>
                                                {post.categories.map(category => (
                                                    <div
                                                        className="category"
                                                        key={category._id}
                                                    >
                                                        <p
                                                        >
                                                            {category.title}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className='flex-1 mt-5'>
                                        <p className='text-lg font-bold underline'>{post.title}</p>
                                        <p className='text-sm text-primary-black dark:text-gray-100 text-opacity-70 dark:text-opacity-60 line-clamp-2'>
                                            {post.description}
                                        </p>
                                    </div>
    
                                    <p className='flex items-center mt-5 font-bold group-hover:underline'>
                                        Read Blog
                                        <ArrowUpRightIcon className="w-4 h-4 ml-2" />
                                    </p>
                                </motion.div>
                            </ClientSideRoute>
                        ))
                    ) : (
                        <div className='flex items-center justify-center'>
                            <NoItem/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default BlogList