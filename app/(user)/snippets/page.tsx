import React from 'react'
import SnippetsList from '../../../components/site/SnippetsList'

function SnippetPage() {
    return (
        <div className='py-7'>
            <div className='relative flex flex-col items-start justify-between mb-3 md:items-center md:flex-row'>
                <h1 className='pageTitle'>Code Snippets</h1>
            </div>
            <hr className={`mb-10 border-primary-teal`} />

            {/* Snippetes Lists */}
            <SnippetsList/>
        </div>
    )
}

export default SnippetPage