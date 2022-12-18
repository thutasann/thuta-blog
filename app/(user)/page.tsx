import React from 'react'
import { previewData } from "next/headers";
import { groq } from "next-sanity"
import { client } from '../../utils/sanity.client';
import PreviewSuspense from "../../components/site/PreviewSuspense";
import PreviewBlogList from '../../components/studio/PreviewBlogList';
import BlogList from '../../components/site/BlogList';

const query = groq`
    *[_type=='post']
    [0..1]{
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)
`;
// Revaliate the Page every 30s
export const revalidate = 30;

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
            <BlogList posts={posts} title={"Recent Blogs"} />
        </div>
    )
}

export default HomePage