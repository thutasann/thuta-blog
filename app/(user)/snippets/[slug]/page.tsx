import { groq } from 'next-sanity';
import React from 'react'
import UnderDevelopment from '../../../../components/site/UnderDevelopment'
import { Snippet } from '../../../../types/typings';
import { client } from '../../../../utils/sanity.client';

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
        *[_type == "snippet"]
        {
            slug
        }
    `;

    const slugs: Snippet[] = await client.fetch(query);
    const slugRoutes = slugs.map(slug => slug?.slug.current)

    return slugRoutes?.map(slug => ({
        slug
    }));
}


async function SnippetDetail({ params: { slug }  } : Props) {

    const query = groq`
        *[_type == 'snippet' && slug.current == $slug][0]
        {
            ...,
            author->,
            tags[]->
        }
    `;

    const snippet: Snippet = await client.fetch(query, { slug });

    return (
        <div>
            <UnderDevelopment/>
        </div>
    )
}

export default SnippetDetail