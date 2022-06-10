import type { FC } from 'react'

import classnames from '@modules/handlers/classnames'

import ArrowIcon from '@components/Icons/Arrow'
import SocialJoin from '@components/Social/Join'
import CardIcon from '@components/Homepage/CallToAction/CardIcon'
import CardThumb from '@components/Homepage/CallToAction/CardThumb'
import CardPlayer from '@components/Homepage/CallToAction/CardPlayer'
import CardStar from './CardStar'

interface HomepageCTA {}

const HomepageCTA: FC<HomepageCTA> = ({}) => (
	<section className="grid grid-cols-2 pt-[8.6rem]">
		<div className="col-span-1 space-y-[3.62rem]">
			<h1 className="text-7xl font-black leading-[4.5rem]">
				Where Music
				<br />
				Meets Crypto
			</h1>
			<h2 className="text-gray-stroke max-w-[36.25rem] text-xl">
				The first trully open music sharing platform connecting the artist to
				the listener.
			</h2>
			<div className="flex max-w-[36.25rem] justify-start  space-x-[0.68rem] ">
				<button
					type="button"
					className={classnames.merge([
						'font-manrope',
						'group flex space-x-2 rounded-sm bg-white py-5 px-9 transition-all duration-150',
						'text-xl font-bold text-black ring-opacity-75 hover:ring-2 hover:ring-primary',
					])}
				>
					<span>Are you an Artist?</span>
					<ArrowIcon
						width={22}
						height={28}
						className="transition-transform duration-150 group-hover:translate-x-1"
					/>
				</button>
				<button
					type="button"
					className={classnames.merge([
						'font-manrope',
						'group flex space-x-2 rounded-sm bg-offwhite py-5 px-9 transition-all duration-150',
						'text-xl font-bold text-white ring-opacity-75 hover:ring-2 hover:ring-primary',
					])}
				>
					<span>Become a Member</span>
					<ArrowIcon
						width={22}
						height={28}
						className="transition-transform duration-150 group-hover:translate-x-1"
					/>
				</button>
			</div>
			<SocialJoin />
		</div>
		<div className="col-span-1 flex flex-col items-end space-y-4">
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
