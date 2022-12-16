import { groq } from "next-sanity";
import { Meta, Post } from "../../../../types/typings";
import { client } from "../../../../utils/sanity.client";
import urlFor from "../../../../utils/urlFor";
import Head from "../../../head"

type Props = {
    params: {
        slug: string;
    }
}

export default async function DetailHead({ params: { slug } } : Props) {

    const query = groq`
        *[_type == 'post' && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->
        }
    `;

    const post: Post = await client.fetch(query, { slug });


    let meta: Meta = {
        title: `Thuta Sann - ${post.title}`,
        description: `${post.description}`,
        image: "/thutasann-blog.jpeg",
        ogimage: `${urlFor(post.mainImage).url()}`,
        type: "website",
        url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/blogs/${post.slug.current}`
    };

    return (
        <>
            <Head meta={meta}/>
        </>
    )
};