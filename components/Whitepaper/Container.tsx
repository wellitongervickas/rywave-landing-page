import type { FC } from 'react'
// @ts-ignore
import { PDFReader } from 'reactjs-pdf-reader'

interface WhitepaperContainer {
	fileURL: string
}

const WhitepaperContainer: FC<WhitepaperContainer> = ({ fileURL }) => {
	return (
		<>
			<style jsx global>{`
				.pdf-reader :global(canvas, #my-pdf, .react-pdf__Page) {
					width: 100% !important;
				}
			`}</style>
			<div className="pdf-reader">
				<PDFReader showAllPage url={fileURL} />
			</div>
		</>
	)
}

export default WhitepaperContainer
