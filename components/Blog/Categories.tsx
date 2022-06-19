import type { FC } from 'react'

import CardWrapper from '@components/CardWrapper'
import Link from 'next/link'

interface BlogCategories {
	categories: Blog.Categories
}

const BlogCategories: FC<BlogCategories> = ({ categories }) => (
	<div className="flex flex-wrap">
		{categories.map((category) => (
			<CardWrapper key={category.id} className="group mx-2 my-2">
				<Link href={`/blog/?categories=${category.id}`}>
					<a className="block py-2 px-3 text-xs transition-opacity duration-200 group-hover:opacity-70">
						{category.name}
					</a>
				</Link>
			</CardWrapper>
		))}
	</div>
)

export default BlogCategories
