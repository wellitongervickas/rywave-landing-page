import type { FC } from 'react'
import CardWrapper from '@components/CardWrapper'
import Accordion from '@components/Accordion'

interface Faq {
	faqs: { label: string; title: string; text: string }[]
}

const Faq: FC<Faq> = ({ faqs }) => (
	<div className="flex flex-col space-y-6">
		{faqs.map((faq, index) => (
			<CardWrapper
				key={index}
				className="p-4 ring-1 ring-white ring-opacity-60"
			>
				<Accordion heading={faq} opened={false}>
					<div
						className="text-gray-stroke space-y-4 p-8"
						dangerouslySetInnerHTML={{ __html: faq.text }}
					/>
				</Accordion>
			</CardWrapper>
		))}
	</div>
)

export default Faq
