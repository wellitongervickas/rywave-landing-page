import Image from '@components/Image'
import type { FC } from 'react'

interface CardPlayer {}

const CardPlayer: FC<CardPlayer> = () => (
	<div className="group relative h-[160px] w-[434px]">
		<div className="absolute z-10">
			<Image
				src="/assets/images/homepage/card-player.png"
				alt="Audio Player"
				layout="fixed"
				width={434}
				height={160}
				priority
			/>
		</div>
		<div className="absolute left-3 top-3 animate-pulse transition-transform duration-300 group-hover:translate-y-1">
			<Image
				src="/assets/images/homepage/card-player-square.png"
				alt="Audio Player Square"
				layout="fixed"
				loading="lazy"
				width={434}
				height={160}
			/>
		</div>
	</div>
)

export default CardPlayer
