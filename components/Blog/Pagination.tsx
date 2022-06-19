import type { FC } from 'react'
import { useRouter } from 'next/router'
import ArrowIcon from '@components/Icons/Arrow'

interface Pagination {
	currentPage: number
	totalPages: number
}

export type { Pagination }

const Pagination: FC<Pagination> = ({ totalPages, currentPage }) => {
	const router = useRouter()

	const doNextPage = () => {
		const currentPath = router.pathname
		router.push(`${currentPath}?page=${+currentPage + 1}`)
	}

	const doPreviousPage = () => {
		const currentPath = router.pathname
		router.push(`${currentPath}?page=${+currentPage - 1}`)
	}

	return (
		<div className="flex w-full items-center justify-center space-x-2">
			{currentPage > 1 && (
				<>
					<span>
						<button type="button" onClick={doPreviousPage}>
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
						<button type="button" onClick={doNextPage}>
							Older posts
						</button>
					</span>
				</>
			)}
		</div>
	)
}

export default Pagination
