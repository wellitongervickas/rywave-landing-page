import CardWrapper from '@components/CardWrapper'
import type { FC } from 'react'

interface BlogArticles {
	articles: Blog.Articles
}

const BlogArticles: FC<BlogArticles> = ({ articles }) => (
	<div className="flex space-x-2">
		{articles.map((article) => (
			<CardWrapper key={article.id}>{article.title}</CardWrapper>
		))}
	</div>
)

export default BlogArticles
