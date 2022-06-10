import type { FC } from 'react'
import { useRef, useMemo } from 'react'

import Phases, { PhaseContainer } from '@components/Homepage/Roadmap/Phases'
import Image from '@components/Image'

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
					text: 'Building the artistic community with ongoing contests and events',
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
					text: 'Unlocking all the Utilities & Tools',
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
					text: 'First exclusive events with NFT as a ticket',
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
		<div className="relative">
			<div className="absolute -bottom-1/3 left-0 hidden h-[800px] w-[800px] opacity-60 lg:block">
				<Image
					src="/assets/images/rectangle.png"
					alt=""
					layout="responsive"
					width={800}
					height={800}
					className="relative z-[-1] opacity-90"
					priority
				/>
			</div>
			<section className="py-12 lg:py-28">
				<div className="flex flex-col space-y-6 container lg:space-y-0">
					<div className="order-2 lg:order-none">
						<Phases
							phases={startTopics}
							className="child space-y-6 lg:flex lg:justify-between lg:space-y-0"
						/>
					</div>
					<div className="order-1 flex items-center md:justify-center lg:order-none lg:pt-12 lg:pb-16">
						<h2 className="mb-12 font-astrospace text-3xl font-black md:text-5xl lg:!mb-0">
							Roadmap
						</h2>
					</div>
					<div className="order-3 lg:order-none">
						<Phases
							phases={endTopics}
							className="space-y-6 lg:flex lg:justify-evenly lg:space-y-16"
						/>
					</div>
				</div>
			</section>
			<div className="absolute top-0 right-0 hidden h-[800px] w-[800px] opacity-60 lg:block">
				<Image
					src="/assets/images/ellipse.png"
					alt=""
					layout="responsive"
					width={800}
					height={800}
					className="relative z-[-1] opacity-90"
					priority
				/>
			</div>
		</div>
	)
}

export default HomepageRoadmap
