import type { FC } from 'react'

import Image from '@components/Image'
import Hero from '@components/GenesisCollection/Hero'
import PerksHolders from '@components/GenesisCollection/PerksHolders'

interface GenesisCollectionContainer {}

const GenesisCollectionContainer: FC<GenesisCollectionContainer> = () => (
	<>
		<div className="absolute top-0 z-[-1] h-full w-full">
			<Image
				src="/assets/images/main-bg.png"
				alt=""
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				className="relative z-[-1] opacity-90"
				priority
			/>
		</div>
		<div className="container">
			<Hero className="pt-12 lg:pt-36" />
			<PerksHolders />
		</div>
	</>
)

export default GenesisCollectionContainer
