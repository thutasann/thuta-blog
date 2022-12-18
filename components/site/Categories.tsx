"use client";

import React from 'react'
import { Category } from '../../types/typings'
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../../slices/categorySlice';

type Props = {
    categories?: Category[],
}

function Categories({ categories } : Props) {

    const dispatch = useDispatch();
    const category = useSelector(selectCategory);

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