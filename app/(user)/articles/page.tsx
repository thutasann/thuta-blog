import React from 'react'

function ArticlesPage() {
    return (
        <section>
            <div className='relative flex flex-col items-start justify-between mb-3 md:items-center md:flex-row'>
                <h1 className='pageTitle'>Articles</h1>
            </div>
            <hr className={`mb-10 border-primary-teal`} />
        </section>
    )
}

export default ArticlesPage