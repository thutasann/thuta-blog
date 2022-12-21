import { groq } from 'next-sanity';
import React from 'react'
import SnippetsList from '../../../components/site/SnippetsList'
import { client } from '../../../utils/sanity.client';

const query = groq`
    *[_type=='snippet']
    {
        ...,
        author->,
        tags[]->
    } | order(_createdAt desc)
`;

const tagsQuery = groq`
    *[_type=='codecategory']
    {
        ...,
    } | order(_createdAt desc)
`;

export const revalidate = 30;

async function SnippetPage() {

    const snippets = await client.fetch(query);
    const tags = await client.fetch(tagsQuery);

    return (
        <div className='py-7'>
            <div className='relative flex flex-col items-start justify-between mb-3 md:items-center md:flex-row'>
                <h1 className='pageTitle'>Code Snippets</h1>
            </div>
            <hr className={`mb-10 border-primary-teal`} />

            <SnippetsList
                snippets={snippets}
                tags={tags}
            />
        </div>
    )
}

export default SnippetPage