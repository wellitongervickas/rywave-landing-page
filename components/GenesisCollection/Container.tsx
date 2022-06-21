import type { FC } from 'react'

import Hero from '@components/GenesisCollection/Hero'
import PerksHolders from '@components/GenesisCollection/PerksHolders'
import ListenToEarn from '@components/GenesisCollection/ListenEarn'
import NFTCreating from '@components/GenesisCollection/NFTCreation'

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

		<div className="pt-12 lg:pt-36">
			<div className="container">
				<Hero />
				<PerksHolders />
				<ListenToEarn />
			</div>
			<NFTCreating />
		</div>
	</>
)

export default GenesisCollectionContainer
