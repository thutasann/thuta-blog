import Image from 'next/image';
import React from 'react';
import { Post } from '../../types/typings';
import urlFor from '../../utils/urlFor';
import ClientSideRoute from './ClientSideRoute';

type Props = {
	posts: Post[];
	setOpenDrawer: any;
};

function SearchBlogs({ posts, setOpenDrawer }: Props) {
	return (
		<div
			className="flex flex-col space-y-4"
			onClick={() => setOpenDrawer(false)}
		>
			{posts?.map((post) => (
				<ClientSideRoute
					key={post._id}
					route={`blogs/${post.slug.current}`}
				>
					<div className="relative flex p-3 space-x-3 transition-all duration-700 ease-in-out border border-gray-500 rounded-md cursor-pointer dark:border-gray-100 items-starte dark:border-opacity-20 border-opacity-20 hover:dark:border-opacity-70 hover:border-opacity-70 hover:shadow-md">
						<Image
							src={urlFor(post.mainImage).url()}
							alt={post.title}
							width={120}
							height={80}
							quality={100}
							loading="lazy"
							placeholder="blur"
							blurDataURL={urlFor(post.mainImage).url()}
							className="object-cover object-center rounded-md"
						/>
						<div className="p-0 -mt-1">
							<h1 className="text-lg font-[700]">{post.title}</h1>
							<p className="text-sm text-gray-400 line-clamp-2">
								{post.description}
							</p>
						</div>
					</div>
				</ClientSideRoute>
			))}
		</div>
	);
}

export default SearchBlogs;
