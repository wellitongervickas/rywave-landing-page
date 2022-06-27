import type { NextPage, GetServerSidePropsContext } from 'next'
import dynamic from 'next/dynamic'
import CardWrapper from '@components/CardWrapper'

import services from '@modules/services'

interface Whitepaper {
	title: string
	fileURL?: string
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const { slug } = context.query

	const page = await services.pages.bySlug(slug as string)

	console.log(page)

	if (!page) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			title: page.title,
			description: page.description,
			fileURL: page?.acf?.whitepaper,
		},
	}
}
const PDFViewer = dynamic(() => import('@components/Whitepaper/Container'), {
	ssr: false,
})

const Whitepaper: NextPage<Whitepaper> = ({ title, fileURL }) => {
	console.log(fileURL)
	return (
		<div className="py-20 container">
			<h1 className="mb-12 text-center font-astrospace text-3xl font-black md:text-5xl">
				{title}
			</h1>
			{fileURL && (
				<CardWrapper className="p-4">
					<PDFViewer fileURL={fileURL} />
				</CardWrapper>
			)}
		</div>
	)
}
export default Whitepaper
