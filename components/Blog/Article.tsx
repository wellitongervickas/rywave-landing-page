import type { FC } from 'react'
import Richtext from '@components/Richtext'

interface BlogArticle {
	content: string
	className?: string
}

const BlogArticle: FC<BlogArticle> = ({ content, className }) => (
	<Richtext className={className} content={content} />
)

export default BlogArticle
