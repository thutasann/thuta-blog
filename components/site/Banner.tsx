import { usePathname } from 'next/navigation';
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiOutlineGithub} from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';
import userData from '../../data/data';

function Banner() {

    let isHidden: boolean;
    const pathname = usePathname();
    if(pathname?.startsWith("/blogs") || pathname?.startsWith("/snippets")){
        isHidden = true;
    }else{
        isHidden = false;
    }

    return (
        <div className={`flex flex-col justify-between mb-10 font-bold py-7 md:flex-row md:space-x-5 ${isHidden && "hidden"}`}>
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
            <div className='flex flex-col items-start justify-start lg:items-end lg:justify-end'>
                <p className='max-w-sm mt-5 text-left lg:text-right md:mt-2'>
                    Software Development Features |  <br/>
                    Latest Development Tech Stacks | <br/>
                    Debugging Methods &#38; More
                </p>
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

        </div>
    )
}

export default Banner