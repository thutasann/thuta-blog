import React from 'react'
import { groq } from "next-sanity"
import { Post } from '../../../../types/typings';
import { client } from '../../../../utils/sanity.client';
import Image from "next/image"
import urlFor from '../../../../utils/urlFor';
import { PortableText} from '@portabletext/react';
import { RichTextComponents } from '../../../../components/site/RichTextComponents';
import CodeBlock from '../../../../components/site/CodeBlock';
import Link from 'next/link';
import { AiFillFacebook, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import { FaTwitterSquare } from 'react-icons/fa';
import CustomCopyToClipboard from '../../../../components/site/CopyToClipboard';
import UnderDevelopment from '../../../../components/site/UnderDevelopment';

type Props = {
    params: {
        slug: string;
    }
}

export const revalidate = 30;

// Static Site Generation
// @ts-ignore
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

    const baseUrl: string = `${process.env.NEXT_PUBLIC_VERCEL_URL}/blogs/${post.slug.current}`;
    const facebookShareLink : string = `https://www.facebook.com/sharer/sharer.php?u=${baseUrl}`;
    const twitterSharedLink : string = `https://twitter.com/share?text=${baseUrl}`;
    const linkedInSharedLink: string = `https://www.linkedin.com/sharing/share-offsite/?url=${baseUrl}`;

    return (
        <article className='pb-28 mt-7'>

            {/* BLOG HEADER */}
            <section className='hidden space-y-2 text-white border border-opacity-50 rounded-md border-primary-teal'>
                <div className='relative flex flex-col justify-between min-h-56 md:flex-row'>
                    {/* Image */}
                    <div
                        className='absolute z-[-99] top-0 w-full h-full p-10 opacity-20 blur-sm'
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

                        {/* Title */}
                        <div className='flex flex-col justify-between gap-y-5'>
                            <div className='flex flex-col space-y-3'>
                                <div className='flex items-center space-x-3'>
                                    <p className='text-primary-black dark:text-white'>
                                        {
                                            new Date(post._createdAt).toLocaleDateString("en-US", {
                                                day: "numeric",
                                                month: 'long',
                                                year: "numeric"
                                            })
                                        }
                                    </p>
                                    <div className='flex items-start justify-start mt-auto space-x-2'>
                                        {
                                            post.categories.map((category) => (
                                                <Link
                                                    key={category._id}
                                                    href={`/category/${category.title}`}
                                                    className='category'
                                                >
                                                    {category.title}
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                                <h1 className='text-4xl font-extrabold text-primary-black dark:text-white'>{post.title}</h1>
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
                        <div className="mt-4">
                            <h2 className='mb-3 italic text-primary-black dark:text-white'>{post.description}</h2>
                        </div>

                        {/* Social */}
                        <div className='mt-4'>
                            <hr className='mb-4 border-gray-400 border-opacity-50' />
                            <h3 className='text-primary-black dark:text-gray-100'>Share This Blog To :</h3>
                            <div className='flex items-center mt-2 space-x-3 text-primary-black dark:text-gray-100'>
                                <a className='icons' href={facebookShareLink} target="_blank" rel='noopener' aria-label="Facebook Share">
                                    <AiFillFacebook/>
                                </a>
                                <a className='icons' href={linkedInSharedLink} target="_blank" rel='noopener' aria-label="LinkedIn Shared">
                                    <AiFillLinkedin/>
                                </a>
                                <a className='icons' href={twitterSharedLink} target="_blank" rel='noopener' aria-label="Twitter Share">
                                    <FaTwitterSquare/>
                                </a>
                                <CustomCopyToClipboard baseUrl={baseUrl}  />
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            {/* Codde */}
            {/* {
                post.code && (
                    <>
                        <h1 className='text-5xl font-bold mt-7'>Code Snippet</h1>
                        <CodeBlock post={post}/>
                    </>
                )
            } */}

            <UnderDevelopment/>

            {/* BLOG BODY */}
            {/* <PortableText
                value={post.body}
                components={RichTextComponents}
            /> */}

        </article>
    )
}

export default BlogDetailPage