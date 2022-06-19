import type { FC } from 'react'
import { useMemo } from 'react'
import { useRouter } from 'next/router'
import ArrowIcon from '@components/Icons/Arrow'
import Link from '@components/Link'

interface Pagination {
	currentPage: number
	totalPages: number
}

export type { Pagination }

const Pagination: FC<Pagination> = ({ totalPages, currentPage }) => {
	const router = useRouter()

	const currentPath = useMemo(() => router.pathname, [router.pathname])

	const selectedSearchQueries = useMemo(() => {
		const queries = new URLSearchParams(router.query as any)

		if (queries.has('page')) {
			queries.delete('page')
		}

		return queries.toString()
	}, [router.query])

	const nextPage = useMemo(
		() => `${currentPath}?page=${+currentPage + 1}${selectedSearchQueries}`,
		[currentPage, currentPath, selectedSearchQueries]
	)

	const previousPage = useMemo(
		() => `${currentPath}?page=${+currentPage - 1}${selectedSearchQueries}`,
		[currentPage, currentPath, selectedSearchQueries]
	)

	return (
		<div className="flex w-full items-center justify-center space-x-2">
			{currentPage > 1 && (
				<>
					<span>
						<Link
							href={previousPage}
							className="transition-opacity duration-200 hover:opacity-70"
						>
							<a>Latest posts</a>
						</Link>
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
						<Link
							href={nextPage}
							className="transition-opacity duration-200 hover:opacity-70"
						>
							<a>Older posts</a>
						</Link>
					</span>
				</>
			)}
		</div>
	)
}

export default Pagination
