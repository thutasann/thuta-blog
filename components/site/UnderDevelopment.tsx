import React from 'react'
import Image from 'next/image'

function UnderDevelopment() {
    return (
        <div className='flex flex-col items-center py-7'>
            <h1 className='pageTitle'>
                Under Development
            </h1>
            <Image
                width={400}
                height={400}
                alt="Thuta Sann Blog Under Development"
                loading='lazy'
                placeholder='blur'
                blurDataURL='/thutasann-blog-underdevelopment.gif'
                quality={100}
                src="/thutasann-blog-underdevelopment.gif"
            />
        </div>
    )
}

export default UnderDevelopment