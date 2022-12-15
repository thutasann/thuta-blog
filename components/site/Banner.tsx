import React from 'react'

function Banner() {
    return (
        <div className='flex flex-col justify-between mb-10 font-bold py-7 md:flex-row md:space-x-5'>
            <div>
                <h1 className='text-7xl'>Thuta's <br/>Thoughts &#38; Blogs</h1>
                <h2 className='mt-7 md:mt-2'>
                    Welcome to{" "}
                    <span className='underline decoration-4 decoration-primary-teal'>
                        Every Developers
                    </span>{" "}
                    favorite blogs in the Devosphere
                </h2>
            </div>
            <p className='max-w-sm mt-5 text-left lg:text-right md:mt-2'>
                Software Development Features | Latest Tech Stacks in Software Development | 
                Debugging Methods &#38; More!
            </p>
        </div>
    )
}

export default Banner