import type { NextPage } from 'next'

interface BlogArticle {
	title: string
}

const BlogArticle: NextPage<BlogArticle> = () => <div>Blog single article</div>

export default BlogArticle
