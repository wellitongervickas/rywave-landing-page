import appConfig from '@app.config'
import Container from '@components/Homepage/Container'
import services from '@modules/services'
import type { NextPage } from 'next'

interface Homepage {
	title: string
	team: Team.Member[]
}

export async function getStaticProps() {
	const { team } = await services.posts.team()

	return {
		props: {
			title: appConfig.description,
			description: appConfig.description,
			team,
		},
	}
}

const Homepage: NextPage<Homepage> = () => <Container />

export default Homepage
