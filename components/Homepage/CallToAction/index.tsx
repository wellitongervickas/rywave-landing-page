import type { FC } from 'react'

import SocialJoin from '@components/Social/Join'
import CardIcon from '@components/Homepage/CallToAction/CardIcon'
import CardThumb from '@components/Homepage/CallToAction/CardThumb'
import CardPlayer from '@components/Homepage/CallToAction/CardPlayer'
import CardStar from '@components/Homepage/CallToAction/CardStar'
import Action from '@components/Homepage/CallToAction/Action'
import classnames from '@modules/handlers/classnames'

interface HomepageCTA {}

const HomepageCTA: FC<HomepageCTA> = ({}) => (
	<section className="grid grid-cols-2 gap-6 pt-12 lg:pt-[8.6rem]">
		<div
			className={classnames.merge([
				'order-2 col-span-2 flex flex-col items-center space-y-[3.62rem]',
				'text-center lg:order-none lg:col-span-1 lg:items-start lg:text-left',
			])}
		>
			<h1 className="font-astrospace text-5xl font-black leading-[4.5rem] lg:text-7xl">
				Where Music {` `}
				<br className="hidden lg:inline" />
				Meets Crypto
			</h1>
			<h2 className="max-w-[36.25rem] text-xl text-gray-stroke">
				The first truly open music sharing platform connecting the artist to the
				listener.
			</h2>
			<div
				className={classnames.merge([
					'flex w-full flex-col justify-start space-y-4 md:flex-row',
					'md:space-y-0 md:space-x-[0.68rem] lg:max-w-[36.25rem]',
				])}
			>
				<Action />
			</div>
			<SocialJoin />
		</div>
		<div
			className={classnames.merge([
				'col-span-2 flex flex-col items-center space-y-4 sm:mb-12',
				'mb-24 hidden px-6 lg:col-span-1 lg:mb-0 lg:block lg:items-end lg:px-0',
			])}
		>
			<div className="relative flex flex-row items-end justify-center space-x-8">
				<CardIcon />
				<CardStar className="absolute top-[25%] -left-12 z-[12] !mx-0 !my-0 hidden translate-x-1/2 transform lg:left-24 lg:top-[45%] lg:block" />
				<CardThumb />
			</div>
			<div className=" flex flex-row items-end justify-center">
				<CardPlayer />
			</div>
		</div>
	</section>
)

export default HomepageCTA
