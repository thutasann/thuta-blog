import React from 'react'
import { Post } from '../../types/typings'
import Image from "next/image"
import urlFor from '../../utils/urlFor'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import ClientSideRoute from './ClientSideRoute'

type Props = {
    posts: Post[]
}

function BlogList({posts}: Props) {
    console.log('posts.length', posts.length)
    return (
        <div>
            <hr className='mb-10 border-primary-teal' />
            <div className='grid grid-cols-1 gap-10 pb-24 md:grid-cols-2 gap-y-16'>   

                {/* Posts */}
                {
                    posts.map(post => (
                        <ClientSideRoute
                            key={post._id}
                            route={`blogs/${post.slug.current}`}
                        >
                            <div className="flex flex-col cursor-pointer group">
                                <div className='relative w-full transition-transform duration-500 ease-in-out h-80 drop-shadow-xl group-hover:scale-105'>
                                    <Image
                                        className="object-cover object-left rounded-[20px] lg:object-center"
                                        src={urlFor(post.mainImage).url()}
                                        loading="lazy"
                                        blurDataURL={urlFor(post.mainImage).url()}
                                        alt={post.author.name}
                                        fill
                                    />
                                    <div className='absolute bottom-0 flex justify-between w-full p-5 text-white bg-black rounded-bl-[20px] rounded-br-[20px] bg-opacity-20 backdrop-blur-lg drop-shadow-full'>
                                        <div>
                                            <p className='font-bold'>{post.title}</p>
                                            <p>
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
                                                    key={category._id}
                                                    className="px-4 py-2 text-sm font-semibold text-center text-gray-100 rounded-full bg-primary-teal hover:bg-secondary-teal"
                                                >
                                                    <p>
                                                        {category.title}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className='flex-1 mt-5'>
                                    <p className='text-lg font-bold underline'>{post.title}</p>
                                </div>

                                <p className='flex items-center mt-5 font-bold group-hover:underline'>
                                    Read Blog
                                    <ArrowUpRightIcon className="w-4 h-4 ml-2" />
                                </p>
                            </div>
                        </ClientSideRoute>

                    ))
                }

            </div>
        </div>
    )
}

export default BlogList