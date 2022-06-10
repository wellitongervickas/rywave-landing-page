import type { FC } from 'react'
import CardWrapper from '@components/CardWrapper'

interface Phases {
	className?: string
	phases: {
		title: string
		items: {
			done: boolean
			text: string
		}[]
	}[]
}

const Phases: FC<Phases> = ({ phases, className }) => {
	return (
		<div className={className}>
			{phases.map((phase, index) => (
				<CardWrapper key={index} className="max-w-[24.68rem] p-4">
					<h3 className="pb-3 text-lg font-normal">{phase.title}</h3>
					<ul>
						{phase.items.map((item, itemIndex) => (
							<li
								key={itemIndex}
								className="text-gray-stroke"
								dangerouslySetInnerHTML={{ __html: item.text }}
							/>
						))}
					</ul>
				</CardWrapper>
			))}
		</div>
	)
}

export default Phases
