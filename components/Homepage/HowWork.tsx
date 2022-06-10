import type { FC } from 'react'
import { useRef } from 'react'

import CardWrapper from '@components/CardWrapper'
import Image from '@components/Image'

interface HomepageHowWork {}

const HomepageHowWork: FC<HomepageHowWork> = () => {
	const { current: topics } = useRef([
		{
			title: 'Community',
			image: '/assets/images/homepage/how-work/community.svg',
			items: ['Artists & Listeners', 'Activities', 'Promotion'],
		},
		{
			title: 'Platform',
			image: '/assets/images/homepage/how-work/platform.svg',
			items: [
				'Listen to Earn',
				'On chain Ownership & Royalties',
				'NFT gated premium features',
			],
		},
		{
			title: 'Tools',
			image: '/assets/images/homepage/how-work/tools.svg',
			items: ['Exclusive Music Programs', 'Insight Portfolio', 'Design Team'],
		},
	])

	return (
		<section className="py-12 lg:py-28">
			<h2 className="font-astrospace mb-4 text-5xl font-black">
				How doest it
				<br className="hidden lg:block" /> work?
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
			<div className="grid grid-cols-3 space-y-5 lg:space-y-0 lg:space-x-5">
				{topics.map((topic, index) => (
					<CardWrapper
						key={index}
						className="col-span-3 space-y-6 p-4 lg:col-span-1"
					>
						<div className="bg-gray-darkness flex h-[3.12rem] w-[3.12rem] items-center justify-center">
							<Image
								src={topic.image}
								alt={topic.title}
								layout="fixed"
								height={22}
								width={22}
							/>
						</div>
						<h3 className="text-xl">{topic.title}</h3>
						<ul className="text-gray-stroke list-inside list-disc">
							{topic.items.map((item, itemIndex) => (
								<li key={itemIndex}>{item}</li>
							))}
						</ul>
					</CardWrapper>
				))}
			</div>
		</section>
	)
}

export default HomepageHowWork
