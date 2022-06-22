import type { FC } from 'react'
import TeamMember from '@components/Homepage/Team/Member'

interface HomepageTeam {
	team: Team.Member[]
}

const HomepageTeam: FC<HomepageTeam> = ({ team }) => (
	<section className="py-12 lg:py-28">
		<h2 className="mb-4 font-astrospace text-5xl font-black">Meet the team</h2>
		<div className="grid grid-cols-12 gap-5">
			{team.map((member, key) => (
				<TeamMember
					key={key}
					member={member}
					className="col-span-12 md:col-span-6 lg:col-span-3"
				/>
			))}
		</div>
	</section>
)

export default HomepageTeam
