import type { FC } from 'react'
import { useRef } from 'react'

import CardWrapper from '@components/CardWrapper'
import Image from '@components/Image'
import classnames from '@modules/handlers/classnames'

interface NFTCreating {}

const NFTCreating: FC<NFTCreating> = () => {
	const { current: topics } = useRef([
		{
			title: 'AI Producer',
			number: 1,
			text: '<p>We create a unique beat with our AI producer</p>',
		},
		{
			title: 'Modifications',
			number: 2,
			text: '<p>We add modifications, including overlaying bass, filters and 8D Audio</p>',
		},
		{
			title: 'NFT as Ticket',
			number: 3,
			text: '<p>We apply one of 6 different animations on our 3D model</p>',
		},
	])

	return (
		<>
			<style jsx>{`
				.nft-creation {
					@apply object-cover object-left-top;
					background-repeat: no-repeat;
					background-image: url('/assets/images/genesis-collection/nft-creation-bg.png');
				}
			`}</style>
			<section className="nft-creation group pb-12 lg:pb-28">
				<div className="container">
					<h2 className="mb-12 font-astrospace text-2xl font-black md:text-3xl lg:text-5xl">
						Process of NFT Creation
					</h2>
					<div className=" grid grid-cols-12 items-center py-6 md:py-24">
						<div
							className={classnames.merge([
								'relative z-[4] col-span-12  min-h-[42rem]',
								'justify-center md:col-span-6 lg:col-span-7',
							])}
						>
							<div
								className={classnames.merge([
									'transition-all duration-500 lg:group-hover:-left-px',
									'absolute left-0 top-[12rem] z-[3]',
									'lg:blur lg:group-hover:blur-none',
								])}
							>
								<Image
									src="/assets/images/genesis-collection/nft-creation-1.png"
									alt="NFT Creation 1"
									layout="fixed"
									loading="lazy"
									height={409}
									width={243}
								/>
							</div>
							<div
								className={classnames.merge([
									'absolute left-0 top-[5rem] z-[2] scale-100 sm:left-[12rem] md:top-[8rem] lg:scale-95',
									'transform blur-[0.15rem] transition-all duration-500 lg:blur-none lg:group-hover:scale-100',
								])}
							>
								<Image
									src="/assets/images/genesis-collection/nft-creation-2.png"
									alt="NFT Creation 2"
									layout="fixed"
									loading="lazy"
									height={407}
									width={249}
								/>
							</div>
							<div
								className={classnames.merge([
									'z-[1] transition-all duration-500 lg:group-hover:left-[24rem]',
									'group-hover: absolute left-0 top-0 sm:left-[22rem] md:top-[4rem] ',
									'blur lg:group-hover:blur-none',
								])}
							>
								<Image
									src="/assets/images/genesis-collection/nft-creation-3.png"
									alt="NFT Creation 3"
									layout="fixed"
									loading="lazy"
									height={404}
									width={249}
								/>
							</div>
						</div>
						<div className="relative z-[5] col-span-12 space-y-6 md:col-span-6 lg:col-span-4">
							{topics.map((topic, index) => (
								<CardWrapper
									key={index}
									className="col-span-2 space-y-6 p-4 lg:col-span-1"
								>
									<div className="flex h-[3.12rem] w-[3.12rem] items-center justify-center bg-gray-darkness text-4xl font-black">
										{topic.number}
									</div>
									<h3 className="text-xl">{topic.title}</h3>
									<div
										className="text-gray-stroke"
										dangerouslySetInnerHTML={{ __html: topic.text }}
									/>
								</CardWrapper>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default NFTCreating
