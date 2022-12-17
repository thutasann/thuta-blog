import React from 'react'
import { groq } from "next-sanity"
import { Post } from '../../../../types/typings';
import { client } from '../../../../utils/sanity.client';
import Image from "next/image"
import urlFor from '../../../../utils/urlFor';
import { PortableText} from '@portabletext/react';
import { RichTextComponents } from '../../../../components/site/RichTextComponents';
import CodeBlock from '../../../../components/site/CodeBlock';

type Props = {
    params: {
        slug: string;
    }
}

// Revalidate the page every 60 seconds
export const revalidate = 30;

// Static Site Generation
export async function generateStaticParams(){
    const query = groq`
        *[_type == "post"]
        {
            slug
        }
    `;

    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map(slug => slug?.slug.current)

    return slugRoutes?.map(slug => ({
        slug
    }))
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
        <article className='pb-28 mt-7'>

            {/* BLOG HEADER */}
            <section className='space-y-2 text-white border border-opacity-50 rounded-md border-primary-teal'>
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
                        <div className='flex flex-col justify-between gap-y-5'>
                            <div className=''>
                                <h1 className='text-4xl font-extrabold text-primary-black dark:text-white'>{post.title}</h1>
                                <p className='text-primary-black dark:text-white'>
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
                                    <p className='text-lg font-bold text-primary-black dark:text-gray-200'>{post.author.name}</p>
                                    <div></div>
                                </div>
                            </div>
                        </div>

                        {/* description */}
                        <div>
                            <h2 className='pt-10 mb-3 italic text-primary-black dark:text-white'>{post.description}</h2>
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

            {/* Codde */}
            {
                post.code && (
                    <>
                        <h1 className='text-5xl font-bold mt-7'>Code Snippet</h1>
                        <CodeBlock post={post}/>
                    </>
                )
            }

            {/* BLOG BODY */}
            <PortableText
                value={post.body}
                components={RichTextComponents}
            />

        </article>
    )
}

export default BlogDetailPage