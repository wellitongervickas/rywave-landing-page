import type { FC } from 'react'
import { useRef } from 'react'

import CardWrapper from '@components/CardWrapper'

interface HowWork {}

const HowWork: FC<HowWork> = () => {
	const { current: topics } = useRef([
		{
			title: 'Community',
			topics: ['Artists & Listeners', 'Activities', 'Promotion'],
		},
		{
			title: 'Platform',
			topics: [
				'Listen to Earn',
				'On chain Ownership & Royalties',
				'NFT gated premium features',
			],
		},
		{
			title: 'Tools',
			topics: ['Exclusive Music Programs', 'Inshight Portfolio', 'Design Team'],
		},
	])

	return (
		<section className="py-28">
			<h2 className="mb-4 text-5xl font-black">
				How doest it
				<br /> work?
			</h2>
			<div className="text-gray-stroke mb-12 space-y-2 text-xl">
				<p>
					At Rywave, we are igniting a revolution in music sharing and
					development.
				</p>
				<p>
					Our Ecosystem consists of three components that guarantee transparency
					and direct interactions between the artist and the listener.
				</p>
			</div>
			<div className="grid grid-cols-3 space-x-5">
				{topics.map((topic, index) => (
					<CardWrapper key={index} className="col-span-1 space-y-6 p-4">
						<h3 className="text-xl">{topic.title}</h3>
						<ul className="text-gray-stroke list-inside list-disc">
							{topic.topics.map((topic, topicIndex) => (
								<li key={topicIndex}>{topic}</li>
							))}
						</ul>
					</CardWrapper>
				))}
			</div>
		</section>
	)
}

export default HowWork
