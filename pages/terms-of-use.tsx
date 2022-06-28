import type { NextPage } from 'next'

import services from '@modules/services'
import Richtext from '@components/Richtext'

interface TermsOfUse {
	title: string
	content: {
		rendered?: string
	}
}

export async function getServerSideProps() {
	const page = await services.pages.bySlug('terms-of-use')

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
				rendered: page?.content?.rendered,
			},
		} as TermsOfUse,
	}
}

const TermsOfUse: NextPage<TermsOfUse> = ({ title, content }) => {
	return (
		<div className="py-20 container">
			<h1 className="mb-12 font-astrospace text-3xl font-black md:text-5xl">
				{title}
			</h1>
			<Richtext content={content.rendered} />
		</div>
	)
}
export default TermsOfUse
