import React from 'react'
import {AiFillFacebook, AiFillLinkedin, AiOutlineGithub} from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';
import userData from '../../data/data';


function Footer() {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className='flex flex-col items-start justify-center w-full py-4 mb-5 border-t border-gray-400 border-opacity-50 md:justify-between md:flex-row md:items-center'>
            <div>
                <h3>@ {year} Thuta Sann. All Rights Reserved.</h3>
            </div>
            <div className='flex items-center mt-4 space-x-3 justify-evenly'>
                <a className='icons' href={userData.socialLinks.github} target="_blank" rel='noopener' aria-label="Thuta Sann GitHub">
                    <AiOutlineGithub/>
                </a>
                <a className='icons' href={userData.socialLinks.facebook} target="_blank" rel='noopener' aria-label="Thuta Sann Facebook">
                    <AiFillFacebook/>
                </a>
                <a className='icons' href={userData.socialLinks.linkedin} target="_blank" rel='noopener' aria-label="Thuta Sann Portfolio">
                    <AiFillLinkedin/>
                </a>
                <a className='icons' href={userData.socialLinks.portfolio} target="_blank" rel='noopener' aria-label="Thuta Sann Portfolio">
                    <FaGlobe/>
                </a>
            </div>
        </div>
    )
}

export default Footer