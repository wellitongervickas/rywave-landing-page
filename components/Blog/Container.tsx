import type { FC } from 'react'

interface BlogContainer {}

const BlogContainer: FC<BlogContainer> = () => (
	<div className="space-y-12 py-20 container">
		<h2 className="mb-6 font-astrospace text-3xl font-black md:text-5xl">
			Blog
		</h2>
		<div>
			<h2 className="text-2xl uppercase text-gray-stroke">
				Learn about cryptocurrency, NFTs, and blockchain, discover our latest
				product updates, partnership announcements, user stories, and more
			</h2>
		</div>
		<div>...posts...</div>
	</div>
)

export default BlogContainer
