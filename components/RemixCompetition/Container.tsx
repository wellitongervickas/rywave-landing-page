import type { FC } from 'react'
import Image from '@components/Image'
import Richtext from '@components/Richtext'

interface RemixCompetitionContainer extends Page.RemixCompetition {}

const RemixCompetitionContainer: FC<RemixCompetitionContainer> = ({
	title,
	subHeading,
	announcing,
	prizes,
}) => (
	<>
		<div className="absolute top-0 z-[-1] h-[380px] w-full">
			<Image
				src="/assets/images/remix-competition-bg.png"
				alt="remix competition"
				placeholder="blur"
				layout="fill"
				objectFit="cover"
				objectPosition="top"
				quality={100}
			/>
		</div>
		<section className="py-20 container">
			<section className="min-h-[200px]">
				<h1 className="text-center font-astrospace text-3xl font-black md:text-5xl">
					{title}
				</h1>
				<Richtext className="text-3xl" content={subHeading} />
			</section>
			<section className="py-24 text-center">
				<Richtext content={announcing} />
			</section>
			<section>
				<h2 className="text-center font-astrospace text-4xl">{prizes.title}</h2>
			</section>
		</section>
	</>
)

export default RemixCompetitionContainer
