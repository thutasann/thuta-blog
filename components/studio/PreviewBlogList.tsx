"use client";

import React from 'react';
import { usePreview } from "../../utils/sanity.preview"
import BlogList from '../site/BlogList';

type Props = {
    query: string;
}

// FOR PREVIEWING BLOGS IN SANITY
function PreviewBlogList({ query }: Props) {
    const posts = usePreview(null, query);
    console.log('Loading Posts...', posts);
    return <BlogList posts={posts}  />
}

export default PreviewBlogList