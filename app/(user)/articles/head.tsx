import { Meta } from "../../../types/typings";
import Head from "../../head"


export default async function ArticleHead() {

    let meta: Meta = {
        title: `Thuta Sann - Articles`,
        image: "/thutasann-blog.jpeg",
        ogimage: `/thutasann-blog.jpeg`,
        description: `Thuta's Personal Blog website where he would share his thoughts and blogs about latest Tech Stack, Software Development, Debugging Methods & more...`,
        type: "website",
        url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/articles/`
    };

    return (
        <>
            <Head meta={meta}/>
        </>
    )
};