import type { FC } from 'react'

interface BlogArticle {
	content: string
}

const BlogArticle: FC<BlogArticle> = ({ content }) => (
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

		<div
			className="richtext space-y-6"
			dangerouslySetInnerHTML={{ __html: content }}
		/>
	</>
)

export default BlogArticle
