import type { FC } from 'react'

import Image from '@components/Image'

import CallToAction from '@components/Homepage/CallToAction'
import HowWork from '@components/Homepage/HowWork'
import SpaceCreators from '@components/Homepage/SpaceCreators'
import FAQ from '@components/Homepage/FAQ'
import Roadmap from '@components/Homepage/Roadmap'

interface HomepageContainer {}

const HomepageContainer: FC<HomepageContainer> = () => (
	<>
		<div className="absolute top-0 z-[-1] h-full w-full">
			<Image
				src="/assets/images/main-bg.png"
				alt=""
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				className="relative z-[-1] opacity-90"
				priority
			/>
		</div>
		<div>
			<div className="space-y-8 container">
				<CallToAction />
				<HowWork />
			</div>
			<Roadmap />
			<div className="container">
				<SpaceCreators />
				<FAQ />
			</div>
		</div>
	</>
)

export default HomepageContainer
