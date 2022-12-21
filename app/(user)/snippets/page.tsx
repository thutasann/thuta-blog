import React from 'react'
import UnderDevelopment from '../../../components/site/UnderDevelopment'

function SnippetPage() {
    return (
        <div className='py-7'>
            <div className='relative flex flex-col items-start justify-between mb-3 md:items-center md:flex-row'>
                <h1 className='pageTitle'>Code Snippets</h1>
            </div>
            <hr className={`mb-10 border-primary-teal`} />
        </div>
    )
}

export default SnippetPage