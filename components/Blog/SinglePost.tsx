import type { FC } from 'react'
import Image from '@components/Image'

import CardWrapper from '@components/CardWrapper'
import Article from '@components/Blog/Article'
import PostDetails from '@components/Blog/Post/Details'
import NewsletterCTA from '@components/Newsletter/CallToAction'

interface BlogSinglePost {
	post: Blog.Post
}

const BlogSinglePost: FC<BlogSinglePost> = ({ post }) => (
	<>
		<h1 className="text-2xl font-black lg:text-4xl 2xl:text-5xl">
			{post.title}
		</h1>
		<PostDetails post={post} />

		{post.image?.sizes?.full?.url && (
			<CardWrapper className="bg-offwhite p-4">
				<div className="relative h-[26rem] rounded-sm">
					<Image
						src={post.image?.sizes?.full?.url}
						alt={post.title}
						objectFit="cover"
						objectPosition="center"
						layout="fill"
						priority
					/>
				</div>
			</CardWrapper>
		)}

		<Article content={post.content} />
	</>
)

export default BlogSinglePost
