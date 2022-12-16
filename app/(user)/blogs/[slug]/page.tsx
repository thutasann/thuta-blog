import React from 'react'
import { groq } from "next-sanity"
import { Post } from '../../../../types/typings';
import { client } from '../../../../utils/sanity.client';
import Image from "next/image"
import urlFor from '../../../../utils/urlFor';
import { PortableText} from '@portabletext/react';
import { RichTextComponents } from '../../../../components/site/RichTextComponents';

type Props = {
    params: {
        slug: string;
    }
}

async function BlogDetailPage({ params : { slug } } : Props) {

    const query = groq`
        *[_type == 'post' && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->
        }
    `;

    const post: Post = await client.fetch(query, { slug });

    return (
        <article className='pb-28'>

            {/* BLOG HEADER */}
            <section className='space-y-2 text-white border border-primary-teal'>
                <div className='relative flex flex-col justify-between min-h-56 md:flex-row'>

                    {/* Image */}
                    <div
                        className='absolute top-0 w-full h-full p-10 opacity-20 blur-sm'
                    >
                        <Image
                            className='object-cover object-center mx-auto -z-50'
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill
                            priority
                        />
                    </div>

                    {/* Text */}
                    <section className='w-full p-5 bg-opacity-20 bg-primary-teal'>
                        <div className='flex flex-col justify-between gap-y-5 md:flex-row'>
                            <div>
                                <h1 className='text-4xl font-extrabold text-white'>{post.title}</h1>
                                <p>
                                    {
                                        new Date(post._createdAt).toLocaleDateString("en-US", {
                                            day: "numeric",
                                            month: 'long',
                                            year: "numeric"
                                        })
                                    }
                                </p>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <Image
                                    className='rounded-full'
                                    src={urlFor(post.author.image).url()}
                                    alt={post.author.name}
                                    height={40}
                                    width={40}
                                    loading="lazy"
                                    placeholder='blur'
                                    blurDataURL={urlFor(post.author.image).url()}
                                />
                                <div className='w-64'>
                                    <h3 className='text-lg font-bold'>{post.author.name}</h3>
                                    <div></div>
                                </div>
                            </div>
                        </div>

                        {/* description */}
                        <div>
                            <h2 className='pt-10 mb-3 italic'>{post.description}</h2>
                            <div className='flex items-start justify-start mt-auto space-x-2'>
                                {
                                    post.categories.map((category) => (
                                        <p
                                            key={category._id}
                                            className='category'
                                        >
                                            {category.title}
                                        </p>
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            {/* BLOG BODY */}
            <PortableText
                value={post.body}
                components={RichTextComponents}
            />
        </article>
    )
}

export default BlogDetailPage