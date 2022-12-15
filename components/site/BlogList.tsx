import React from 'react'
import { Post } from '../../types/typings'

type Props = {
    posts: Post[]
}

function BlogList({posts}: Props) {
    console.log('posts.length', posts.length)
    return (
        <div>
            <hr className='mb-10 border-primary-teal' />
        </div>
    )
}

export default BlogList