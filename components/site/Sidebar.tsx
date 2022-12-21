import React from 'react'
import { BiChevronsRight } from 'react-icons/bi'

function Sidebar() {
    return (
        <div className='sidebar'>
            <h2 className='font-[700] text-2xl'>Categories</h2>
            <div className='sidebar__content'>
                <ul>
                    {[1,3,4,5,6].map((i) => (
                        <li key={i}>
                            <BiChevronsRight className='w-5 h-5 -ml-2'/> NextJs
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar