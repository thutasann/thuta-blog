// pages/server-sitemap-index.xml/index.tsx
import { getServerSideSitemap, getServerSideSitemapIndex } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { groq } from 'next-sanity';
import { Post } from '../../../types/typings';
import { client } from '../../../utils/sanity.client';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    // Method to source urls from cms

    const query = groq`
        *[_type == "post"]
        {
            slug
        }
    `;
    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map(slug => `${process.env.NEXT_PUBLIC_VERCEL_URL}/${slug?.slug.current}`)

    const fields = [
        {
            loc: `${process.env.NEXT_PUBLIC_VERCEL_URL}`, // Absolute url
            lastmod: new Date().toISOString(),
        },
    ]
    
    return getServerSideSitemap(ctx, fields)

}

// Default export to prevent next.js errors
export default function SitemapIndex() {}