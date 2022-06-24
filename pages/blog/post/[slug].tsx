import type { NextPage, GetServerSidePropsContext } from 'next'

import services from '@modules/services'

import NewsletterCTA from '@components/Newsletter/CallToAction'
import BlogSinglePost from '@components/Blog/SinglePost'

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const { slug } = context.query

	const { posts } = await services.blog.posts({
		slug: slug as string,
	})

	if (!posts.length) {
		return {
			notFound: true,
		}
	}

	const post = posts[0]

	return {
		props: {
			title: post.title,
			description: post.description,
			post,
		},
	}
}

interface BlogArticle {
	title: string
	post: Blog.Post
}

const BlogArticle: NextPage<BlogArticle> = ({ post }) => (
	<div className="space-y-12 py-20 pb-60 container">
		<BlogSinglePost post={post} />
		<NewsletterCTA />
	</div>
)

export default BlogArticle
