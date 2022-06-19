import CardWrapper from '@components/CardWrapper'
import type { FC } from 'react'

interface BlogCategories {
	categories: Blog.Categories
}

const BlogCategories: FC<BlogCategories> = ({ categories }) => (
	<div className="flex space-x-2">
		{categories.map((category) => (
			<CardWrapper key={category.id}>
				<div className="py-2 px-3">
					<span className="text-xs">{category.name}</span>
				</div>
			</CardWrapper>
		))}
	</div>
)

export default BlogCategories
