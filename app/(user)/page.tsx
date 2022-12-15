import React from 'react'
import { previewData } from "next/headers";
import { groq } from "next-sanity"
import { client } from '../../utils/sanity.client';
import PreviewSuspense from "../../components/site/PreviewSuspense";
import PreviewBlogList from '../../components/studio/PreviewBlogList';
import BlogList from '../../components/site/BlogList';

const query = groq`
    *[_type=='post']{
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)
`;

async function HomePage() {

    if (previewData()){
        return (
            <PreviewSuspense
                fallback={(
                    <div role="status">
                        <p className='text-lg text-center animate-pulse text-primary-teal'>
                            Loading Preview Data...
                        </p>
                    </div>
                )}
            >
                <PreviewBlogList query={query}/>
            </PreviewSuspense>
        )
    }

    const posts = await client.fetch(query);

    return (
        <div>
            <BlogList posts={posts}/>
        </div>
    )
}

export default HomePage