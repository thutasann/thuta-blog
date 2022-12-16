import { Meta } from "../../../types/typings";
import Head from "../../head";

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {

    let meta: Meta = {
        title: "Thuta Sann - Blogs",
        description: `Thuta's Personal Blog website where he would share his thoughts and blogs about latest Tech Stack, Software Development, Debugging Methods & more... `,
        image: "/thutasann-blog.jpeg",
        ogimage: "/thutasann-blog-logo.png",
        type: "website",
    };

    return (
        <div>
            {children}
        </div>
    )
}