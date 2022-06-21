import type { NextPage, GetServerSidePropsContext } from 'next'

import BlogContainer from '@components/Blog/Container'
import services from '@modules/services'

export async function getServerSideProps(context: GetServerSidePropsContext) {
	try {
		const { page = 1, categories: queryCategories = undefined } = context.query

		const [postsResult, categoriesResult] = await Promise.all([
			services.blog.posts({
				page,
				categories: queryCategories,
			}),
			services.blog.categories(),
		])

		const { posts, totalPages } = postsResult

		const { categories } = categoriesResult

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
	} catch (error) {
		return {
			notFound: true,
		}
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
