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
		<div className="absolute top-0 h-screen w-screen">
			<Image
				src="/assets/images/main-bg.png"
				alt=""
				layout="fill"
				className="relative z-[-1] opacity-90"
				priority
			/>
		</div>
		<div className="relative z-10">
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
