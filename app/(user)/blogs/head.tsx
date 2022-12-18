import { Meta } from "../../../types/typings";
import Head from "../../head"

type Props = {
    params: {
        slug: string;
    }
}

export default async function DetailHead({ params: { slug } } : Props) {

    let meta: Meta = {
        title: `Thuta Sann - Blogs`,
        image: "/thutasann-blog.jpeg",
        ogimage: `/thutasann-blog.jpeg`,
        description: `Thuta's Personal Blog website where he would share his thoughts and blogs about latest Tech Stack, Software Development, Debugging Methods & more...`,
        type: "website",
        url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/blogs/`
    };

    return (
        <>
            <Head meta={meta}/>
        </>
    )
};