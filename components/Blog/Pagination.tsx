import type { FC } from 'react'
import { useMemo, useCallback } from 'react'
import { useRouter } from 'next/router'
import ArrowIcon from '@components/Icons/Arrow'

interface Pagination {
	currentPage: number
	totalPages: number
}

export type { Pagination }

const Pagination: FC<Pagination> = ({ totalPages, currentPage }) => {
	const router = useRouter()

	const currentPath = useMemo(() => router.pathname, [router.pathname])

	const selectedSearchQueries = useMemo(() => {
		const queries = new URLSearchParams(router.asPath)

		if (queries.has('categories')) {
			return 'categories=' + queries.get('categories')
		}
	}, [router.asPath])

	const doNextPage = useCallback(() => {
		router.push(
			`${currentPath}?page=${+currentPage + 1}${selectedSearchQueries}`
		)
	}, [currentPage, currentPath, router, selectedSearchQueries])

	const doPreviousPage = useCallback(() => {
		router.push(
			`${currentPath}?page=${+currentPage - 1}${selectedSearchQueries}`
		)
	}, [currentPage, currentPath, router, selectedSearchQueries])

	return (
		<div className="flex w-full items-center justify-center space-x-2">
			{currentPage > 1 && (
				<>
					<span>
						<button
							type="button"
							onClick={doPreviousPage}
							className="transition-opacity duration-200 hover:opacity-70"
						>
							Latest posts
						</button>
					</span>
					<span>
						<ArrowIcon
							height={20}
							width={10}
							className="rotate-180 transform"
						/>
					</span>
				</>
			)}

			<span>{currentPage}</span>
			<span>of</span>
			<span>{totalPages}</span>

			{currentPage < totalPages && (
				<>
					<span>
						<ArrowIcon height={20} width={10} />
					</span>
					<span>
						<button
							type="button"
							onClick={doNextPage}
							className="transition-opacity duration-200 hover:opacity-70"
						>
							Older posts
						</button>
					</span>
				</>
			)}
		</div>
	)
}

export default Pagination
