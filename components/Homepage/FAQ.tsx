import type { FC } from 'react'

import { useRef } from 'react'
import FAQ from '@components/FAQ'

interface HomepageFaq {}

const HomepageFaq: FC<HomepageFaq> = ({}) => {
	const { current: faqs } = useRef([
		{
			label: '01',
			title: 'What Blockchain are you using?',
			text: '<p>We are utilizing the Immutable X smart contracts (making EVM compatible) for the minting site. The ecosystem will be carried out on either Solana or a subnet of Ethereum, Avalanche or Near.</p>',
		},
		{
			label: '02',
			title: 'How do you uzilize NFTs?',
			text: '<p>NFTs serve as the perfect utilizor of music tracks by providing ownership, exclusivity, tying the digital asset to the physical (tickets). On the Discotheque, NFTs can be streamed, shared or subject to licensing agreements.</p>',
		},
		{
			label: '03',
			title: 'How can I join?',
			text: "<p>As an artist you can join by filling out the artist from at the start of the page. It will guide you through all the information. After that, you'll be receiving further information from the team on next steps. As someone who enjoys music, feel free to join our Discord community along all the artists, the activity and a holistic music experience.</p>",
		},
	])

	return (
		<section className="py-20 lg:py-28">
			<h2 className="mb-12 text-5xl font-black">FAQ</h2>
			<FAQ faqs={faqs} />
		</section>
	)
}

export default HomepageFaq
