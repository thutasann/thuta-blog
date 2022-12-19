import { Meta } from "../../../types/typings";
import Head from "../../head"

export default async function SnippetHead() {


    let meta: Meta = {
        title: `Thuta Sann - Snippets`,
        description: `Code Snipeets especially ReactJS, NextJS, AngularTS, TailwindCSS, SpringBoot, NestJS, Swift and so on...`,
        image: "/thutasann-blog.jpeg",
        ogimage: "/thutasann-blog.jpeg",
        type: "website",
        url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/snippets`
    };

    return (
        <>
            <Head meta={meta}/>
        </>
    )
};