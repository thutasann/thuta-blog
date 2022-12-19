import { Meta } from "../../../../types/typings";
import Head from "../../../head"

type Props = {
    params: {
        name: string;
    }
}

export default async function DetailHead({ params: { name } } : Props) {


    let meta: Meta = {
        title: `Thuta Sann - ${name}`,
        description: `Thuta's Personal Blog website where he would share his thoughts and blogs about latest Tech Stack, Software Development, Debugging Methods & more... `,
        image: "/thutasann-blog.jpeg",
        ogimage: "/thutasann-blog.jpeg",
        type: "website",
        url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/category/${name}`
    };

    return (
        <>
            <Head meta={meta}/>
        </>
    )
};