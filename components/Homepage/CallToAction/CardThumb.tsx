import Image from '@components/Image'
import type { FC } from 'react'

interface CardThumb {}

const CardThumb: FC<CardThumb> = () => (
	<div className="group relative h-[465px] w-[280px]">
		<div className="absolute z-10">
			<Image
				src="/assets/images/homepage/card-thumb.png"
				alt="Audio Thumb"
				layout="fixed"
				width={280}
				height={465}
				priority
			/>
		</div>
		<div className="absolute -right-3 -top-2 animate-pulse transition-transform duration-300 group-hover:-translate-x-1">
			<Image
				src="/assets/images/homepage/card-thumb-square.png"
				alt="Audio Thumb Square"
				layout="fixed"
				width={280}
				height={465}
				priority
			/>
		</div>
	</div>
)

export default CardThumb
