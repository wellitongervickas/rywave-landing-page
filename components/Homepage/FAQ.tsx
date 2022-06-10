import type { FC } from 'react'

import { useRef } from 'react'
import FAQ from '@components/FAQ'

interface HomepageFaq {}

const HomepageFaq: FC<HomepageFaq> = ({}) => {
	const { current: faqs } = useRef([
		{
			label: '01',
			title: 'What Blockchain are you using?',
			text: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>',
		},
		{
			label: '02',
			title: 'How do you uzilize NFTs?',
			text: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>',
		},
		{
			label: '03',
			title: 'How can I join?',
			text: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>',
		},
	])

	return (
		<section className="py-28">
			<h2 className="mb-12 text-5xl font-black">FAQ</h2>
			<FAQ faqs={faqs} />
		</section>
	)
}

export default HomepageFaq
