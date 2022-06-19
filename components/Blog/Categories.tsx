import type { FC } from 'react'
import { useMemo, useCallback } from 'react'
import { useRouter } from 'next/router'

import CardWrapper from '@components/CardWrapper'
import Link from 'next/link'

interface BlogCategories {
	categories: Blog.Categories
}

const BlogCategories: FC<BlogCategories> = ({ categories }) => {
	const router = useRouter()

	const getRouter = useCallback(
		(id: number) => {
			const queries = new URLSearchParams(router.query as any)

			queries.set('categories', String(id))

			return queries.toString()
		},
		[router.query]
	)

	return (
		<div className="flex space-x-2">
			{categories.map((category) => (
				<CardWrapper key={category.id} className="group">
					<Link href={`/blog/?${getRouter(category.id)}`}>
						<a className="inline-block py-2 px-3 text-xs transition-opacity duration-200 group-hover:opacity-70">
							{category.name}
						</a>
					</Link>
				</CardWrapper>
			))}
		</div>
	)
}

export default BlogCategories
