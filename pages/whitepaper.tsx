import type { NextPage } from 'next'

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

const Whitepaper: NextPage<Whitepaper> = () => (
	<div className="py-20 container lg:py-28">Whitepaper</div>
)

export default Whitepaper
