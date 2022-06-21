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
		<style jsx>{`
			.richtext :global(h2) {
				@apply text-lg font-bold md:text-4xl;
			}

			.richtext :global(h3) {
				@apply text-lg font-bold md:text-3xl;
			}

			.richtext :global(h4) {
				@apply text-lg font-bold md:text-2xl;
			}

			.richtext :global(ul, ol) {
				@apply ml-4 mb-6 list-outside list-disc;
			}

			.richtext :global(img) {
				@apply h-auto !w-auto;
			}

			.richtext :global(figure) {
				@apply !max-w-full;
			}

			.richtext :global(figure:is(.alignleft)),
			.richtext :global(img:is(.alignleft)) {
				@apply float-left;
				@apply mr-5;
			}

			.richtext :global(figure figcaption) {
				@apply py-6 text-sm text-gray-400;
			}

			.richtext :global(figure:is(.alignright)),
			.richtext :global(img:is(.alignright)) {
				@apply float-right;
				@apply ml-5;
			}

			.richtext :global(figure:is(.aligncenter)),
			.richtext :global(img:is(.aligncenter)) {
				@apply flex flex-col items-center justify-center;
				@apply mr-auto mb-5 ml-auto;
			}
		`}</style>
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
