import type { FC } from 'react'

import CardWrapper from '@components/CardWrapper'
import Phase from '@components/Homepage/Roadmap/Phase'
import Image from '@components/Image'
import classnames from '@modules/handlers/classnames'

export interface PhaseContainer {
	title: string
	direction?: 'bottom' | 'right' | 'top'
	icon?: 'pulse' | 'radial'
	items: {
		done: boolean
		text: string
	}[]
}

interface Phases {
	className?: string
	phases: PhaseContainer[]
}

const Phases: FC<Phases> = ({ phases, className }) => {
	return (
		<div className={className}>
			{phases.map((phase, index) => (
				<div key={index} className="relative">
					<CardWrapper className="relative z-[1] max-w-[24.68rem] p-4">
						<div>
							<h3 className="pb-3 text-lg font-normal">{phase.title}</h3>
							<div>
								{phase.items.map((item, itemIndex) => (
									<Phase key={itemIndex} {...item} />
								))}
							</div>
						</div>
					</CardWrapper>
					{phase.icon && (
						<div
							className={classnames.merge([
								'absolute z-0 animate-pulse delay-200',
								phase.icon === 'pulse'
									? '-top-16 -right-16'
									: '-bottom-16 -right-16',
							])}
						>
							<Image
								src={`/assets/images/homepage/roadmap/${phase.icon}.svg`}
								alt={phase.title}
								width={phase.icon === 'pulse' ? 175 : 115}
								height={phase.icon === 'pulse' ? 175 : 115}
							/>
						</div>
					)}
				</div>
			))}
		</div>
	)
}

export default Phases
