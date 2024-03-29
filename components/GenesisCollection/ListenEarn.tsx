import type { FC } from 'react'

import Image from '@components/Image'
import CardWrapper from '@components/CardWrapper'
import classnames from '@modules/handlers/classnames'
import ArrowIcon from '@components/Icons/Arrow'

interface ListenToEarn {}

const ListenToEarn: FC<ListenToEarn> = () => (
	<>
		<style jsx>{`
			.revenue-box {
				box-shadow: 0px 2.77056px 2.77056px rgba(0, 0, 0, 0.25),
					0px 0px 23.5498px rgba(61, 188, 142, 0.7) !important;
			}

			.box-shadow-purple {
			}
		`}</style>
		<section className="py-12 lg:py-28">
			<h2 className="mb-12 font-astrospace text-2xl font-black md:text-3xl lg:text-5xl">
				Listen to Earn Model
			</h2>
			<div className="relative my-12 mx-auto flex w-full items-center justify-center lg:my-28 lg:h-[620px]">
				<div className="hidden container lg:block">
					<Image
						src="/assets/images/genesis-collection/listen-to-earn-section-bg.png"
						alt="listen to earn"
						layout="fixed"
						width={1190}
						height={595}
						priority
						className="z-[-1]"
					/>
				</div>
				<div className="top-0 z-[1] h-full w-full space-y-6 text-xs lg:absolute lg:space-y-0">
					<div
						className={classnames.merge([
							'bg-blue-700 py-2 px-4 text-center font-bold',
							'lg:absolute lg:left-[23.5rem] lg:inline ',
						])}
					>
						Member
					</div>
					<div
						className={classnames.merge([
							'bg-fuchsia-700 py-2 px-4 text-center font-bold',
							'lg:absolute lg:left-[66rem] lg:inline ',
						])}
					>
						Artist
					</div>
					<div className="flex justify-center lg:hidden">
						<ArrowIcon className="rotate-90 transform text-gray-stroke" />
					</div>
					<CardWrapper
						className={classnames.merge([
							'lg:absolute lg:left-[0rem] lg:top-[12rem] lg:inline',
							'p-4 ',
						])}
					>
						<p className="mb-3">5555 items</p>
						<h3 className="mb-6 bg-violet-500 py-2 px-4 text-base shadow-lg drop-shadow-lg">
							Genesis Premium NFT
						</h3>
						<ul className="list-inside list-disc">
							<li>Lifetime Subscription </li>
							<li>Acess all premium content</li>
							<li>Full listen-to-earn model</li>
						</ul>
					</CardWrapper>
					<CardWrapper
						className={classnames.merge([
							'lg:absolute lg:left-[18rem] lg:top-[12rem] lg:inline',
							'p-4',
						])}
					>
						<p className="mb-3">Floating Supply </p>
						<h3 className="mb-6 bg-purple-700 py-2 px-4 text-base shadow-lg drop-shadow-lg">
							Subscription NFT
						</h3>
						<ul className="list-inside list-disc">
							<li>Time-Based Subscription </li>
							<li>Acess most of the premium content</li>
							<li>Full listen-to-earn model</li>
						</ul>
					</CardWrapper>
					<CardWrapper
						className={classnames.merge([
							'lg:absolute lg:left-[37.6rem] lg:top-[12rem] lg:inline',
							'p-4',
						])}
					>
						<p className="mb-3">Unlimited Supply</p>
						<h3 className="mb-6 bg-slate-400 py-2 px-4 text-base shadow-lg drop-shadow-lg">
							Free Tier
						</h3>
						<ul className="list-inside list-disc">
							<li>Paid access to premium content</li>
							<li>Limited access to features</li>
							<li>No listen-to-earn model</li>
						</ul>
					</CardWrapper>
					<div className="flex justify-center lg:hidden">
						<ArrowIcon className="rotate-90 transform text-gray-stroke" />
					</div>
					<CardWrapper
						className={classnames.merge([
							'lg:absolute lg:left-[57rem] lg:top-[12rem] lg:inline',
							'p-4 text-center',
						])}
					>
						<p>Premium Content</p>
					</CardWrapper>
					<CardWrapper
						className={classnames.merge([
							'lg:absolute lg:left-[71rem] lg:top-[12rem] lg:inline',
							'min-w-[120px] p-4 text-center',
						])}
					>
						<p>Free Content</p>
					</CardWrapper>
					<div className="flex justify-center lg:hidden">
						<ArrowIcon className="rotate-90 transform text-gray-stroke" />
					</div>
					<div
						className={classnames.merge([
							'lg:absolute lg:left-[20rem] lg:top-[33rem] lg:inline',
							'revenue-box !mt-12 border border-emerald-600 text-center lg:!mt-0',
						])}
					>
						<CardWrapper className="py-8 px-16">
							<p className="font-black">Revenue</p>
						</CardWrapper>
					</div>
				</div>
			</div>
		</section>
	</>
)

export default ListenToEarn
