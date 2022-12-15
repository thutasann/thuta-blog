import React from 'react'
import { Post } from '../../types/typings'

type Props = {
    posts: Post[]
}

function BlogList({posts}: Props) {
    console.log('posts.length', posts.length)
    return (
        <div>BlogList</div>
    )
}

export default BlogList