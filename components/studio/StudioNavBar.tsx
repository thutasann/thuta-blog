import Link from "next/link"
import { ArrowUturnLeftIcon  } from '@heroicons/react/24/solid';

function StudioNavBar(props: any) {
    return (
        <div>
            <div className="flex items-center justify-between p-5">
                <Link href={"/"} className="text-[#56c8d7] flex items-center  group group-hover:text-teal-600 space-x-3">
                    <ArrowUturnLeftIcon className="h-6 w-6 text-[#56c8d7]"/>
                    Go Back to Website
                </Link>

                <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#56c8d7]">
                    <h1 className="mr-1 font-bold text-white">
                        For more questions, Inquiry me!
                    </h1>
                    <Link
                        href={"https://thutasann.vercel.app/contact"}
                        className="text-[#56c8d7]"
                        target={"_blank"}
                        rel="noopener"
                    >
                        https://thutasann.vercel.app/contact
                    </Link>
                </div>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}

export default StudioNavBar