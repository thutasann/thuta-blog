import matter from "gray-matter";
import getPostMetaData from "../../../../components/article/getPostMetadata";
import fs from "fs";
import { Meta } from "../../../../types/typings";
import Head from "../../../head"

const getPostContent = (slug: string) => {
    const folder = "articles/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetaData();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};


export default async function ArticleDetailHead(props : any) {

    const slug = props.params.slug;
    const post = getPostContent(slug);


    let meta: Meta = {
        title: `Thuta Sann - ${post.data.title}`,
        image: "/thutasann-blog.jpeg",
        type: "website",
        ogimage: "/thutasann-blog.jpeg",
        url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/articles/${slug}`
    };

    return (
        <>
            <Head meta={meta}/>
        </>
    )
};