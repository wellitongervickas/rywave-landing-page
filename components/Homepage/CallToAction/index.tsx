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
	<section className="grid grid-cols-2 lg:pt-[8.6rem]">
		<div
			className={classnames.merge([
				'order-2 col-span-2 flex flex-col items-center space-y-[3.62rem]',
				'text-center lg:order-none lg:col-span-1 lg:items-start lg:text-left',
			])}
		>
			<h1 className="font-astrospace text-7xl font-black leading-[4.5rem]">
				Where Music {` `}
				<br className="hidden lg:inline" />
				Meets Crypto
			</h1>
			<h2 className="text-gray-stroke max-w-[36.25rem] text-xl">
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
				'col-span-2 mb-12 flex flex-col items-center space-y-4',
				'px-6 lg:col-span-1 lg:mb-0 lg:items-end lg:px-0',
			])}
		>
			<div className="relative flex flex-row items-end space-x-8">
				<CardIcon />
				<CardStar />
				<CardThumb />
			</div>
			<div>
				<CardPlayer />
			</div>
		</div>
	</section>
)

export default HomepageCTA
