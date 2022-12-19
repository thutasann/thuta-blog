"use client";

import React from 'react'
import { Category } from '../../types/typings'
import { useDispatch, useSelector } from 'react-redux';
import { chooseCategory, selectCate } from '../../slices/categorySlice';

type Props = {
    categories?: Category[],
    isHidden?: boolean
}

function Categories({ categories, isHidden } : Props) {

    const dispatch = useDispatch();
    const category : categoryState = useSelector(selectCate)

    const handleSelect = (name?: string) => {
        dispatch(chooseCategory({
            name: name,
        }));
    }

    return (
        <div className={`flex items-center space-x-3 ${isHidden && "hidden"}`}>
            <button
                className={`cateBtn ${category.name === "all" && "bg-primary-teal"}`}
                onClick={
                    () => handleSelect("all")
                }
            >
                All
            </button>
            {
                categories?.map((cate, index) =>(
                    <button
                        key={index}
                        className={`cateBtn ${category.name === cate.title && "bg-primary-teal"}`}
                        onClick={
                            ()=> handleSelect(cate?.title)
                        }
                    >
                        {cate.title}
                    </button>
                ))
            }
        </div>
    )
}

export default Categories