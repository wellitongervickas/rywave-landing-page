import Image from '@components/Image'
import type { FC } from 'react'

interface CardIcon {}

const CardIcon: FC<CardIcon> = () => (
	<div className="group relative h-[140px] w-[143px]">
		<div className="absolute z-10">
			<Image
				src="/assets/images/homepage/card-icon.png"
				alt="Audio Icon"
				layout="fixed"
				width={143}
				height={140}
				priority
			/>
		</div>
		<div className="absolute -right-2 -top-2 animate-pulse transition-transform delay-150 duration-300 group-hover:translate-y-1">
			<Image
				src="/assets/images/homepage/card-icon-square.png"
				alt="Audio Icon Square"
				layout="fixed"
				width={143}
				height={140}
				loading="lazy"
			/>
		</div>
	</div>
)

export default CardIcon
