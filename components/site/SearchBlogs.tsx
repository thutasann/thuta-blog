import Image from 'next/image'
import React from 'react'
import { Post } from '../../types/typings'
import urlFor from '../../utils/urlFor'

type Props ={
    posts: Post[]
}

function SearchBlogs({ posts } : Props) {
    return (
        <div className='flex flex-col space-y-4'>
            {
                posts?.map((post) => (
                        <div 
                            key={post._id}
                            className='flex p-3 space-x-3 transition-all duration-700 ease-in-out border border-gray-500 rounded-md cursor-pointer dark:border-gray-100 items-starte dark:border-opacity-20 border-opacity-20 hover:dark:border-opacity-70 hover:border-opacity-70 hover:shadow-md'
                        >
                            <Image
                                src={urlFor(post.mainImage).url()}
                                alt={post.title}
                                width={120}
                                height={90}
                                quality={100}
                                className="object-cover object-center rounded-md"
                            />
                            <div className='p-0 -mt-1'>
                                <h1 className='text-lg font-[700]'>
                                    {post.title}
                                </h1>
                                <p className='text-sm text-gray-400 line-clamp-2'>
                                    {post.description}
                                </p>
                            </div>
                        </div>
                ))
            }
        </div>
    )
}

export default SearchBlogs