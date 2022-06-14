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
		<style jsx>{`
			:global(body) {
				background-size: cover;
				background-repeat: no-repeat;
				background-image: url('/assets/images/main-bg.png');
			}
		`}</style>

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
