import { MagnifyingGlassIcon} from '@heroicons/react/24/solid';
import { groq } from 'next-sanity';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Post } from '../../types/typings';
import { client } from '../../utils/sanity.client';
import NoItem from './NoItem';
import SearchBlogs from './SearchBlogs';
import Skeleton from './Skeleton';


type Props = {
    openDrawer: any;
    setOpenDrawer: any;
}

const query = groq`
    *[_type=='post']{
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)
`;

function DrawerContent({ openDrawer, setOpenDrawer  } : Props) {

    const router = useRouter();

    const [blogs, setBlogs] = useState<Post[]>([]);
    const [input, setInput] = useState<any>();

    const fetchPosts = async() =>{
        const posts  =  await client.fetch(query);
        setBlogs(posts)
    }

    // Search Filtering the Items
    const filters = blogs?.filter((val: any) =>
        val.title.toLowerCase().match(input)
    );

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
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <MagnifyingGlassIcon
                    className='absolute w-6 h-6 cursor-pointer right-1 bottom-3'
                />
            </div>
            {
                blogs?.length > 0 ? (
                    <div className='mt-7'>
                        {
                            filters.length !== 0 && (
                                <div className='flex items-center justify-between my-3'>
                                    <h1 className='text-[14px] font-[700] mb-1 text-opacity-50 text-gray-500 dark:text-gray-300'>
                                        Search Results:
                                    </h1>
                                    <span
                                        className='text-sm underline duration-700 ease-in-out cursor-pointer decoration-primary-teal underline-offset-2 hover:no-underline'
                                        onClick={() => {
                                            setOpenDrawer(false);
                                            router.push("/blogs");
                                        }}
                                    >
                                        See All.
                                    </span>
                                </div>
                            )
                        }
                        {
                            filters.length === 0 &&(
                                <NoItem/>
                            )
                        }
                        <SearchBlogs posts={filters} setOpenDrawer={setOpenDrawer}/>
                    </div>
                ) :(
                    <div className="mt-7">
                        <Skeleton/>
                    </div>
                )
            }
        </section>
    )
}

export default DrawerContent