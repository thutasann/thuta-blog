import React from 'react'
import { AiOutlineTags } from 'react-icons/ai';
import { BiChevronsRight } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { chooseTag, selectTag } from '../../slices/tagSlice';
import { CodeCategory } from '../../types/typings';

type Props = {
    tags: CodeCategory[]
}

function Sidebar({tags} : Props) {

    const dispatch = useDispatch();

    //@ts-ignore
    const tag = useSelector(selectTag);

    const handleSelect = (name?: string) => {
        dispatch(chooseTag({
            name: name
        }))
    }

    return (
        <div className='sidebar'>
            <h2 className='font-[700] text-2xl flex items-center'>
                <AiOutlineTags className='w-6 h-6 mr-3 -ml-2'/>
                Tags
            </h2>
            <div className='sidebar__content'>
                <ul>
                    <li 
                        onClick={
                            () => handleSelect("all")
                        }
                    >
                        <BiChevronsRight 
                            className={`w-6 h-6 -ml-2 ${tag?.name === "all" && "fill-secondary-teal"}`}
                        /> 
                        All
                    </li>
                    {tags.map((item, index) => (
                        <li 
                            key={index}
                            onClick={
                                () => handleSelect(item?.title)
                            }
                        >
                            <BiChevronsRight 
                                className={`w-6 h-6 -ml-2 ${tag?.name === item.title && "fill-secondary-teal"}`}
                            /> 
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar