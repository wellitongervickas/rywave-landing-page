import type { NextPage } from 'next'

import GenesisCollectionContainer from '@components/GenesisCollection/Container'

interface GenesisCollection {
	title: string
	description: string
}

export function getStaticProps() {
	return {
		props: {
			title: 'Genesis Collection',
			description:
				'Our first collection consists of 5555 genesis NFTs which unlocks ultimate resources of the Rywave Ecosystem.',
		},
	}
}

const GenesisCollection: NextPage<GenesisCollection> = () => (
	<GenesisCollectionContainer />
)

export default GenesisCollection
