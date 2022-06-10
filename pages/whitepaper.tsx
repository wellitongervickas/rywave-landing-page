import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import CardWrapper from '@components/CardWrapper'

interface Whitepaper {
	title: string
}

export function getStaticProps() {
	return {
		props: {
			title: 'Whitepaper',
		},
	}
}

const PDFViewer = dynamic(() => import('@components/Whitepaper/Container'), {
	ssr: false,
})

const Whitepaper: NextPage<Whitepaper> = () => {
	return (
		<div className="py-20 container">
			<h2 className="mb-12 text-center font-astrospace text-3xl font-black md:text-5xl">
				Whitepaper
			</h2>
			<CardWrapper className="p-4">
				<PDFViewer />
			</CardWrapper>
		</div>
	)
}
export default Whitepaper
