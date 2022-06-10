import Image from '@components/Image'
import type { FC } from 'react'

interface CardThumb {}

const CardThumb: FC<CardThumb> = () => (
	<div className="group relative h-[325px] w-[210px] lg:h-[465px] lg:w-[280px]">
		<div className="absolute z-10">
			<Image
				src="/assets/images/homepage/card-thumb.png"
				alt="Audio Thumb"
				layout="intrinsic"
				width={280}
				height={465}
				priority
			/>
		</div>
		<div className="absolute -right-3 -top-2 animate-pulse transition-transform delay-150 duration-300 group-hover:-translate-x-1">
			<Image
				src="/assets/images/homepage/card-thumb-square.png"
				alt="Audio Thumb Square"
				layout="intrinsic"
				width={280}
				height={465}
				priority
			/>
		</div>
	</div>
)

export default CardThumb
