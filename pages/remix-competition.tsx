import type { NextPage } from 'next'

import services from '@modules/services'
import RemixCompetitionContainer from '@components/RemixCompetition/Container'

export async function getServerSideProps() {
	const page = await services.pages.bySlug('remix-competition')

	if (!page) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			title: page.title,
			description: page.description,
			...page.acf,
		} as Page.RemixCompetition,
	}
}

const RemixCompetition: NextPage<Page.RemixCompetition> = (props) => (
	<RemixCompetitionContainer {...props} />
)
export default RemixCompetition
