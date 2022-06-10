import type { FC } from 'react'
import CallToAction from '@components/Homepage/CallToAction'
import HowWork from '@components/Homepage/HowWork'

interface HomepageContainer {}

const HomepageContainer: FC<HomepageContainer> = () => (
	<div>
		<div className="space-y-8 container">
			<CallToAction />
			<HowWork />
		</div>
	</div>
)

export default HomepageContainer
