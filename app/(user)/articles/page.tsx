import React from 'react'
import getPostMetaData from '../../../components/article/getPostMetadata'
import PostPreview from '../../../components/article/PostPreview'

async function ArticlesPage() {

    const postMetaData = getPostMetaData();
    const postPreViews = postMetaData?.map((post) => (
        <PostPreview
            key={post.slug}
            {...post}
        />
    ))

    return (
        <section>
            <div className='relative flex flex-col items-start justify-between mb-3 md:items-center md:flex-row'>
                <h1 className='pageTitle'>Articles</h1>
                <p className='text-[14px] md:text-[17.5px] font-[700]'>Articles, with a focus on the Software Development.</p>
            </div>
            <hr className={`mb-10 border-primary-teal`} />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-7">{postPreViews}</div>
        </section>
    )
}

export default ArticlesPage