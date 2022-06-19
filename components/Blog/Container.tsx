import type { FC } from 'react'
import BlogCategories from '@components/Blog/Categories'

interface BlogContainer {}

const categories = [
	{
		id: 1,
		name: 'Popular',
		slug: 'popular',
		taxonomy: 'category',
	},
	{
		id: 2,
		name: 'NFT',
		slug: 'nft',
		taxonomy: 'category',
	},
	{
		id: 3,
		name: 'Engineering',
		slug: 'engineering',
		taxonomy: 'category',
	},
]

const BlogContainer: FC<BlogContainer> = () => (
	<>
		<h2 className="mb-6 font-astrospace text-3xl font-black md:text-5xl">
			Blog
		</h2>
		<div>
			<h2 className="text-2xl uppercase text-gray-stroke">
				Learn about cryptocurrency, NFTs, and blockchain, discover our latest
				product updates, partnership announcements, user stories, and more
			</h2>
		</div>
		<div className="space-y-12">
			<BlogCategories categories={categories} />
		</div>
	</>
)

export default BlogContainer
