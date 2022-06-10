import type { FC } from 'react'
import { useRef, useMemo } from 'react'

import Phases, { PhaseContainer } from '@components/Homepage/Roadmap/Phases'

interface HomepageRoadmap {}

const HomepageRoadmap: FC<HomepageRoadmap> = ({}) => {
	const { current: topics } = useRef<PhaseContainer[]>([
		{
			title: 'Phase 1',
			direction: 'bottom',
			icon: 'pulse',
			items: [
				{
					done: true,
					text: 'Building the artiscic community with ongoing contests and events',
				},
				{
					done: true,
					text: 'Onboarding Artists',
				},
			],
		},
		{
			title: 'Phase 2',
			direction: 'right',
			items: [
				{
					done: false,
					text: 'Launching the v01 NFT music Collection',
				},
				{
					done: false,
					text: 'Unlocking all the utilities & Tools',
				},
			],
		},
		{
			title: 'Phase 3',
			direction: 'top',
			icon: 'radial',
			items: [
				{
					done: false,
					text: 'Launch of the Discotheque',
				},
				{
					done: false,
					text: 'First exclusive events with NFT as ticket',
				},
			],
		},
		{
			title: 'Phase 4',
			items: [
				{
					done: false,
					text: 'Virtual music experience',
				},
				{
					done: false,
					text: 'The Ecosystem in full scale. enabling genuine connections between the artist and the user',
				},
			],
		},
	])

	const startTopics = useMemo(() => [topics[0], topics[3]], [topics])
	const endTopics = useMemo(() => [topics[1], topics[2]], [topics])

	return (
		<section className="py-12 lg:py-28">
			<div className="flex flex-col space-y-6 container  lg:space-y-0 ">
				<div className="order-2 lg:order-none">
					<Phases
						phases={startTopics}
						className="space-y-6 lg:flex lg:justify-between lg:space-y-0"
					/>
				</div>
				<div className="order-1 pt-20 pb-16 text-center lg:order-none">
					<h2 className="mb-12 text-5xl font-black">Roadmap</h2>
				</div>
				<div className="order-3 lg:order-none">
					<Phases
						phases={endTopics}
						className="space-y-6 lg:flex lg:justify-evenly lg:space-y-0"
					/>
				</div>
			</div>
		</section>
	)
}

export default HomepageRoadmap
