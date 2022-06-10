import type { FC } from 'react'
import CallToAction from '@components/Homepage/CallToAction'
import HowWork from '@components/Homepage/HowWork'

interface HomepageContainer {
	className?: string
}

const HomepageContainer: FC<HomepageContainer> = ({ className }) => (
	<div className={className}>
		<CallToAction />
		<HowWork />
	</div>
)

export default HomepageContainer
