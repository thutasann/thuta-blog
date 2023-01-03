"use client"

import Link from "next/link";
import { AiOutlineCalendar } from "react-icons/ai";
import { PostMetadata } from "../../types/articles";

const PostPreview = (props: PostMetadata) => {
    return (
        <Link
            href={`/articles/${props.slug}`}
            className="p-4 transition-all duration-700 ease-in-out bg-transparent border rounded-md shadow-sm cursor-pointer border-primary-teal hover:border-secondary-teal hover:shadow-md group"
        >
            <p className="flex items-center text-sm text-gray-400">
                <AiOutlineCalendar className='mr-1'/>  
                {props.date}
            </p>

                <h2 className="mt-2 font-[700] mb-4 group-hover:underline">{props.title}</h2>
            <p className="text-sm italic text-gray-400">{props.subtitle}</p>
        </Link>
    );
};

export default PostPreview;
