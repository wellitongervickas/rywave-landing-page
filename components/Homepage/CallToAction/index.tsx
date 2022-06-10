import type { FC } from 'react'

import SocialJoin from '@components/Social/Join'
import CardIcon from '@components/Homepage/CallToAction/CardIcon'
import CardThumb from '@components/Homepage/CallToAction/CardThumb'
import CardPlayer from '@components/Homepage/CallToAction/CardPlayer'
import CardStar from '@components/Homepage/CallToAction/CardStar'
import Action from '@components/Homepage/CallToAction/Action'

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
				<Action />
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
