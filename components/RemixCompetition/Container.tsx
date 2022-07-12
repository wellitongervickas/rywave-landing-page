import type { FC } from 'react'
import Image from '@components/Image'
import Richtext from '@components/Richtext'

interface RemixCompetitionContainer extends Page.RemixCompetition {}

const RemixCompetitionContainer: FC<RemixCompetitionContainer> = ({
	title,
	subHeading,
}) => (
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
		<section className="space-y-6 py-20 container">
			<h1 className="text-center font-astrospace text-3xl font-black md:text-5xl">
				{title}
			</h1>
			<Richtext className="text-3xl" content={subHeading} />
		</section>
	</div>
)

export default RemixCompetitionContainer
