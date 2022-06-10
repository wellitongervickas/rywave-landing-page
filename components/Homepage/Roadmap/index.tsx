import type { FC } from 'react'
import { useRef, useMemo } from 'react'

import Phases from '@components/Homepage/Roadmap/Phases'

interface HomepageRoadmap {}

const HomepageRoadmap: FC<HomepageRoadmap> = ({}) => {
	const { current: topics } = useRef([
		{
			title: 'Phase 1',
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
		<section className="py-28">
			<div className="container">
				<div>
					<Phases phases={startTopics} className="flex justify-between" />
				</div>
				<div className="pt-20 pb-16 text-center">
					<h2 className="mb-12 text-5xl font-black">Roadmap</h2>
				</div>
				<div>
					<Phases phases={endTopics} className="flex justify-evenly" />
				</div>
			</div>
		</section>
	)
}

export default HomepageRoadmap
