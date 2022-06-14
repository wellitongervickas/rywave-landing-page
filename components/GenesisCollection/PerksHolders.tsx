import type { FC } from 'react'
import { useRef } from 'react'

import CardWrapper from '@components/CardWrapper'
import Image from '@components/Image'

interface PerksHolders {}

const PerksHolders: FC<PerksHolders> = () => {
	const { current: topics } = useRef([
		{
			title: 'Listen To Earn',
			image: '/assets/images/genesis-collection/listen-to-earn.svg',
			text: '<p>Earn money while listening to your favourite artists. As a holder, you are rewarded a lifetime ability to our extensive Listen2Earn model</p>',
		},
		{
			title: 'Lifetime Subcription',
			image: '/assets/images/genesis-collection/lifetime-sub.svg',
			text: '<p>Becoming a holder means you are awarded the unlimited NFT-as-a-subscription to the Discotheque.</p>',
		},
		{
			title: 'NFT as Ticket',
			image: '/assets/images/genesis-collection/nft.svg',
			text: '<p>Partnering up with community selected festivals, concerts or clubs, which you will be able to access with your NFT.</p>',
		},
		{
			title: 'Disco Plus',
			image: '/assets/images/genesis-collection/disco.svg',
			text: '<p>Unlock all the bonuses on our platform. Get access to exclusive cosmetics, themes and connect with artists.</p>',
		},
	])

	return (
		<section className="py-12 lg:py-28">
			<h2 className="mb-12 font-astrospace text-2xl font-black md:text-3xl lg:text-5xl">
				Perks for holders
			</h2>

			<div className="grid grid-cols-2 gap-12">
				{topics.map((topic, index) => (
					<CardWrapper
						key={index}
						className="col-span-2 space-y-6 p-4 lg:col-span-1"
					>
						<div className="flex h-[3.12rem] w-[3.12rem] items-center justify-center bg-gray-darkness">
							<Image
								src={topic.image}
								alt={topic.title}
								layout="fixed"
								height={22}
								width={22}
							/>
						</div>
						<h3 className="text-xl">{topic.title}</h3>
						<div
							className="text-gray-stroke"
							dangerouslySetInnerHTML={{ __html: topic.text }}
						/>
					</CardWrapper>
				))}
			</div>
		</section>
	)
}

export default PerksHolders
