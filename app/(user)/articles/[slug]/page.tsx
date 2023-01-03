import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "../../../../components/article/getPostMetadata"; 

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

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center h-56 px-4 my-12 text-center transition-all duration-700 ease-in-out border rounded-lg border-primary-teal hover:shadow-md">
                <h1 className="mb-3 text-4xl font-extrabold text-primary-black dark:text-gray-400">{post.data.title}</h1>
                <p className="mt-2 text-opacity-50 text-primary-black dark:text-gray-400 text-md">{post.data.date}</p>
            </div>

            <div className="flex items-center justify-center">
                <article className="prose dark:text-gray-100 text-primary-black">
                    <Markdown
                        options={{ forceBlock: true }}
                    >{post.content}</Markdown>
                </article>
            </div>
        </div>
    );
};

export default PostPage;
