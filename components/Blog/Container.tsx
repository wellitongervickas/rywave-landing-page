import type { FC } from 'react'
import type { Pagination as IPagination } from '@components/Blog/Pagination'

import BlogCategories from '@components/Blog/Categories'
import BlogPosts from '@components/Blog/Posts'
import Pagination from '@components/Blog/Pagination'

interface BlogContainer extends IPagination {
	categories: Blog.Categories
	posts: Blog.Posts
}

const BlogContainer: FC<BlogContainer> = ({
	categories,
	posts,
	totalPages,
	currentPage,
}) => (
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
		<div className="flex flex-col space-y-12">
			{categories.length > 0 && <BlogCategories categories={categories} />}
			<BlogPosts posts={posts} />
			<Pagination currentPage={currentPage} totalPages={totalPages} />
		</div>
	</>
)

export default BlogContainer
