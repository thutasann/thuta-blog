import { MagnifyingGlassIcon} from '@heroicons/react/24/solid';
import { groq } from 'next-sanity';
import { useEffect, useLayoutEffect, useState } from 'react';
import { client } from '../../utils/sanity.client';
import BlogList from './BlogList';


type Props = {
    openDrawer: any;
}

const query = groq`
    *[_type=='post']
    [0..1]{
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)
`;

function DrawerContent({ openDrawer  } : Props) {
    console.log('openDrawer', openDrawer)
    const [blogs, setBlogs] = useState<any>();

    const fetchPosts = async() =>{
        const posts  =  await client.fetch(query);
        console.log('post', posts)
        setBlogs(posts)
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <section>
            <div className='relative mt-5'>
                <input
                    className='inputBox'
                    placeholder='Search For Blogs...'
                    spellCheck={false}
                    autoCapitalize="none"
                />
                <MagnifyingGlassIcon
                    className='absolute w-6 h-6 right-1 bottom-3'
                />
            </div>
            <BlogList posts={blogs}/>
        </section>
    )
}

export default DrawerContent