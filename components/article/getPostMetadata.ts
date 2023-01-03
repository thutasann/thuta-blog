import fs from "fs"
import matter from "gray-matter"
import { PostMetadata } from "../../types/articles"

const getPostMetaData = () : PostMetadata[] =>{
    const folder = "articles/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files?.filter((file) => file.endsWith(".md"));

    // Get gray-matter data from each file
    const posts = markdownPosts?.map((fileName) => {
        const fileContents = fs.readFileSync(`articles/${fileName}`, "utf-8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace(".md", ""),
        };
    });

    return posts;
};

export default getPostMetaData;