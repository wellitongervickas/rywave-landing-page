import type { NextPage } from 'next'

interface BlogArticle {
	title: string
	post: Blog.Post
}

const BlogArticle: NextPage<BlogArticle> = ({ post }) => (
	<div>Blog single article</div>
)

export default BlogArticle
