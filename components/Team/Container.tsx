import type { FC } from 'react'
import TeamMember from '@components/Team/Member'
import Image from '@components/Image'
import TeamAction from '@components/Team/Action'

interface TeamContainer {
	team: Team.Member[]
}

const TeamContainer: FC<TeamContainer> = ({ team }) => (
	<div className="relative">
		<div className="absolute bottom-0 z-[-1] h-full min-h-[2000px] w-full">
			<Image
				src="/assets/images/members-bg.png"
				alt="members bg"
				layout="fill"
				objectFit="cover"
				objectPosition="top"
				quality={100}
			/>
		</div>
		<section className="space-y-12 py-12 container lg:py-28">
			<h2 className="mb-12 font-astrospace text-3xl font-black md:text-5xl">
				Meet the team
			</h2>
			<div className="grid grid-cols-12 gap-5">
				{team.map((member, key) => (
					<TeamMember
						key={key}
						member={member}
						className="col-span-12 md:col-span-6 lg:col-span-3"
					/>
				))}
			</div>
			<TeamAction />
		</section>
	</div>
)

export default TeamContainer
