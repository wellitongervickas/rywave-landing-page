import type { NextPage, GetServerSidePropsContext } from 'next'

import BlogContainer from '@components/Blog/Container'
import services from '@modules/services'

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const { page = 1, categories: queryCategories } = context.query

	const { posts, totalPages } = await services.blog.posts({
		page,
		categories: queryCategories,
	})

	const { categories } = await services.blog.categories()

	if (!posts.length) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			title: 'Blog',
			description:
				'Learn about cryptocurrency, NFTs, and blockchain, discover our latest product updates, partnership announcements, user stories, and more',
			posts,
			categories,
			page,
			totalPages,
		},
	}
}

interface Blog {
	title: string
	posts: Blog.Posts
	categories: Blog.Categories
	page: number
	totalPages: number
}

const Blog: NextPage<Blog> = ({ posts, categories, page, totalPages }) => (
	<div className="space-y-12 py-20 container">
		<BlogContainer
			posts={posts}
			categories={categories}
			totalPages={totalPages}
			currentPage={page}
		/>
	</div>
)

export default Blog
