import BlogContainer from '@components/Blog/Container'
import services from '@modules/services'
import type { NextPage } from 'next'

export async function getServerSideProps() {
	const { posts } = await services.blog.posts()
	const { categories } = await services.blog.categories()

	return {
		props: {
			title: 'Blog',
			description:
				'Learn about cryptocurrency, NFTs, and blockchain, discover our latest product updates, partnership announcements, user stories, and more',
			posts,
			categories,
		},
	}
}

interface Blog {
	title: string
	posts: Blog.Posts
	categories: Blog.Categories
}

const Blog: NextPage<Blog> = ({ posts, categories }) => (
	<div className="space-y-12 py-20 container">
		<BlogContainer posts={posts} categories={categories} />
	</div>
)

export default Blog
