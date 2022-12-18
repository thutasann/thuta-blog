import React from 'react'
import { Category } from '../../types/typings'

type Props = {
    categories?: Category[],
}

function Categories({ categories } : Props) {
    return (
        <div className='flex items-center space-x-3'>
            {
                categories?.map((cate, index) =>(
                    <button
                        key={index}
                        className={`cateBtn`}
                    >
                        {cate.title}
                    </button>
                ))
            }
        </div>
    )
}

export default Categories