import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import CardWrapper from '@components/CardWrapper'
import services from '@modules/services'

interface Whitepaper {
	title: string
	content: {
		fileURL?: string
	}
}

export async function getServerSideProps() {
	const page = await services.pages.bySlug('whitepaper')

	if (!page) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			title: page.title,
			description: page.description,
			content: {
				fileURL: page?.acf?.whitepaper?.url,
			},
		} as Whitepaper,
	}
}
const PDFViewer = dynamic(() => import('@components/Whitepaper/Container'), {
	ssr: false,
})

const Whitepaper: NextPage<Whitepaper> = ({ title, content }) => {
	return (
		<div className="py-20 container">
			<h1 className="mb-12 text-center font-astrospace text-3xl font-black md:text-5xl">
				{title}
			</h1>
			{content?.fileURL && (
				<CardWrapper className="p-4">
					<PDFViewer fileURL={content.fileURL} />
				</CardWrapper>
			)}
		</div>
	)
}
export default Whitepaper
