import type { FC } from 'react'

import Image from '@components/Image'
import Hero from '@components/GenesisCollection/Hero'
import PerksHolders from '@components/GenesisCollection/PerksHolders'

interface GenesisCollectionContainer {}

const GenesisCollectionContainer: FC<GenesisCollectionContainer> = () => (
	<>
		<style jsx>{`
			:global(body) {
				background-size: cover;
				background-repeat: no-repeat;
				background-position: top center;
				background-image: url('/assets/images/genesis-bg.png');
			}
		`}</style>

		<div>
			<div className="container">
				<Hero className="pt-12 lg:pt-36" />
				<PerksHolders />
			</div>
		</div>
	</>
)

export default GenesisCollectionContainer
