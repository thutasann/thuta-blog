import React from 'react'
import { previewData } from "next/headers";
import { groq } from "next-sanity"
import { client } from '../../utils/sanity.client';
import PreviewSuspense from "../../components/site/PreviewSuspense";

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
            <div>preview</div>
        )
    }

    const posts = await client.fetch(query);

    return (
        <div>
            home
        </div>
    )
}

export default HomePage