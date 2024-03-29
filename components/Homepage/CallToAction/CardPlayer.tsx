import type { FC } from 'react'

import { useState } from 'react'

import Image from '@components/Image'
import Loading from '@components/Loading'
import classnames from '@modules/handlers/classnames'
import Play from '@components/Icons/Play'

interface CardPlayer {}

const CardPlayer: FC<CardPlayer> = () => {
	const [isPlaying, setIsPlaying] = useState(false)

	const toggleAudio = (playing: boolean) => () => {
		setIsPlaying(playing)
	}

	return (
		<div className="group relative h-[90px] w-[240px] lg:h-[160px] lg:w-[434px]">
			<div className="absolute z-10">
				<Image
					src="/assets/images/homepage/card-player.png"
					alt="Audio Player"
					layout="intrinsic"
					width={434}
					height={160}
					priority
				/>
			</div>
			<div className="absolute -right-3 top-3 animate-pulse transition-transform delay-150 duration-300 group-hover:translate-y-1">
				<Image
					src="/assets/images/homepage/card-player-square.png"
					alt="Audio Player Square"
					layout="intrinsic"
					loading="lazy"
					width={434}
					height={160}
				/>
			</div>
			<div
				className={classnames.merge([
					'group absolute right-8 bottom-9 z-[11] h-[48px] w-[48px] bg-offwhite',
					'tramsform flex skew-y-[10deg] cursor-pointer items-center justify-center',
				])}
			>
				{isPlaying ? (
					<>
						<Loading
							onClick={toggleAudio(false)}
							className="transition-opacity duration-150 group-hover:opacity-50"
						/>
						<audio
							controls
							autoPlay
							className="hidden"
							onEnded={toggleAudio(false)}
						>
							<source src="/assets/audios/intro.mp3" type="audio/mpeg" />
						</audio>
					</>
				) : (
					<div className="relative">
						<Play
							onClick={toggleAudio(true)}
							className="relative z-10 transition-opacity duration-150 group-hover:opacity-50"
						/>
						<Play className="rigt-0 absolute top-0 z-[9] animate-ping" />
					</div>
				)}
			</div>
		</div>
	)
}

export default CardPlayer
