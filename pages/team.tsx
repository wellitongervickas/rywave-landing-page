import TeamContainer from '@components/Team/Container'
import services from '@modules/services'
import type { NextPage } from 'next'

interface Team {
	title: string
	team: Team.Member[]
}

export async function getStaticProps() {
	const { team } = await services.posts.team()

	return {
		props: {
			title: 'Team',
			description: 'Meet Rywave Team',
			team,
		},
	}
}

const Team: NextPage<Team> = ({ team }) => <TeamContainer team={team} />

export default Team
