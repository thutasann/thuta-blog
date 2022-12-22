"use client";

import React from 'react'
import Image from 'next/image'

function GridBanner() {
    return (
        <div className='grid grid-flow-row-dense grid-cols-3 gap-x-2 gap-y-3 my-[50px]'>

            {/* React */}
            <div className='rounded-lg shadow-xl min-h-[70px] md:min-h-[150px] lg:min-h-[210px] relative'>
                <Image
                    src="/banners/thutasann-react.webp"
                    fill
                    alt="thuta sann blog reactjs"
                    priority
                    quality={100}
                    className='rounded-lg'
                />
            </div>
            
            {/* NextJS */}
            <div className='relative rounded-lg shadow-xl min-h-[250px] md:min-h-[400px] lg:min-h-[530px] col-span-3'>
                <Image
                    src="/banners/thutasann-nextjs.png"
                    fill
                    alt="thuta sann blog nextjs"
                    priority
                    quality={100}
                    className='rounded-lg'
                />
            </div>

            {/* Siwft IOS */}
            <div className='rounded-lg relative shadow-xl min-h-[192px] md:min-h-[380px] lg:min-h-[500px] row-span-2 col-span-2'>
                <Image
                    src="/banners/thutasann-swift.jpeg"
                    fill
                    alt="thuta sann blog Swift"
                    priority
                    quality={100}
                    className='rounded-lg'
                />
            </div>

            {/* Gatsby */}
            <div className='relative rounded-lg shadow-xl min-h-[70px] md:min-h-[150px] lg:min-h-[210px]'>
                <Image
                    src="/banners/thutasann-gatsby.png"
                    fill
                    alt="thuta sann blog Gatsby"
                    priority
                    quality={100}
                    className='rounded-lg'
                />
            </div>

            {/* Tailwind */}
            <div className='relative rounded-lg shadow-xl min-h-[70px] md:min-h-[150px] lg:min-h-[210px]'>
                <Image
                    src="/banners/thutasann-tailwind.jpeg"
                    fill
                    alt="thuta sann blog Tailwind"
                    priority
                    quality={100}
                    className='rounded-lg'
                />
            </div>

            {/* Firebase */}
            <div className='relative rounded-lg shadow-xl min-h-[50px]'>
                <Image
                    src="/banners/thutasann-firebase.webp"
                    fill
                    alt="thuta sann blog Firebase"
                    priority
                    quality={100}
                    className='rounded-lg'
                />
            </div>  

            {/* TypeScript */}
            <div className='relative rounded-lg shadow-xl min-h-[50px]'>
                <Image
                    src="/banners/thutasann-typescript.png"
                    fill
                    alt="thuta sann blog Firebase"
                    priority
                    quality={100}
                    className='rounded-lg'
                />
            </div>
            
        </div>
    )
}

export default GridBanner