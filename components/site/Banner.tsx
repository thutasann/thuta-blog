import React from 'react'

function Banner() {
    return (
        <div className='flex flex-col justify-between px-10 py-5 mb-10 font-bold lg:flex-row lg:space-x-5'>
            <div>
                <h1 className='text-7xl'>Thuta's Thoughts &#38; Blogs</h1>
                <h2 className='mt-5 md:mt-0'>
                    Welcome to{" "}
                    <span className='underline decoration-4 decoration-primary-teal'>
                        Every Developers
                    </span>
                    favorite blogs in the Devosphere
                </h2>
            </div>
            <p className='max-w-sm mt-5 text-gray-400 md:mt-2'>
                Software Development Features | Latest Tech Stacks in Software Development | 
                Debugging Methods &#38; More!
            </p>
        </div>
    )
}

export default Banner