import React from 'react'
import { AiOutlineTags } from 'react-icons/ai';
import { BiChevronsRight } from 'react-icons/bi'
import { CodeCategory } from '../../types/typings';

type Props = {
    tags: CodeCategory[]
}

function Sidebar({tags} : Props) {
    return (
        <div className='sidebar'>
            <h2 className='font-[700] text-2xl flex items-center'>
                <AiOutlineTags className='w-5 h-6 mr-3 -ml-2'/>
                Tags
            </h2>
            <div className='sidebar__content'>
                <ul>
                    {tags.map((tag, index) => (
                        <li key={index}>
                            <BiChevronsRight className='w-5 h-5 -ml-2'/> {tag.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar