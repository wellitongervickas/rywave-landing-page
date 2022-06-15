import type { FC } from 'react'

import Hero from '@components/GenesisCollection/Hero'
import PerksHolders from '@components/GenesisCollection/PerksHolders'
import ListenToEarn from '@components/GenesisCollection/ListenEarn'

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
				<ListenToEarn />
			</div>
		</div>
	</>
)

export default GenesisCollectionContainer
