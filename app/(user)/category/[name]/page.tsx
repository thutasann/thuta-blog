import { groq } from 'next-sanity';
import React from 'react'
import BlogList from '../../../../components/site/BlogList';
import { client } from '../../../../utils/sanity.client';

type Props = {
    params: {
        name: string;
    }
}

const query = groq`
    *[_type=='post']
    {
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)
`;



async function CategoryBlogPage({ params: { name }  } : Props) {

    const posts = await client.fetch(query);

    // @ts-ignore
    const filteredPosts = posts.filter((post) => post.categories.find(cate => cate.title === name ));


    return (
        <div className='py-7'>
            <BlogList posts={filteredPosts} title={name} isHidden={true} />
        </div>
    )
}

export default CategoryBlogPage