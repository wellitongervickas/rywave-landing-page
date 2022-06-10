import type { FC } from 'react'
// @ts-ignore
import { PDFReader } from 'reactjs-pdf-reader'

interface WhitepaperContainer {}

const WhitepaperContainer: FC<WhitepaperContainer> = () => {
	return (
		<>
			<style jsx global>{`
				.pdf-reader :global(canvas, #my-pdf, .react-pdf__Page) {
					width: 100% !important;
				}
			`}</style>
			<div className="pdf-reader">
				<PDFReader showAllPage url={'/assets/pdfs/rywave-whitepaper.pdf'} />
			</div>
		</>
	)
}

export default WhitepaperContainer
