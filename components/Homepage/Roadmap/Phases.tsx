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
	const iconsSizes = {
		radial: [115, 115],
		pulse: [175, 175],
	}

	const directionSizes = {
		bottom: [480, 210],
		right: [200, 10],
		top: [5, 336],
	}

	const directionClasses = {
		bottom: ['-left-16 top-[70%]'],
		right: ['-right-36 top-24 z-[12]'],
		top: ['right-12 bottom-[90%] z-[12]'],
	}

	return (
		<div className={className}>
			{phases.map((phase, index) => (
				<div key={index} className="relative">
					<CardWrapper
						className={classnames.merge([
							'relative z-[1] w-full p-4 lg:max-w-[24.68rem]',
							!phase.direction && 'relative lg:-top-24',
						])}
					>
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
									? '-top-16 lg:-right-16'
									: '-bottom-16 lg:-right-16',
							])}
						>
							<Image
								src={`/assets/images/homepage/roadmap/${phase.icon}.svg`}
								alt={phase.title}
								width={iconsSizes[phase.icon][0]}
								height={iconsSizes[phase.icon][1]}
								loading="lazy"
							/>
						</div>
					)}
					{phase.direction && (
						<div
							className={classnames.merge([
								'absolute hidden lg:block',
								directionClasses[phase.direction],
							])}
						>
							<Image
								src={`/assets/images/homepage/roadmap/${phase.direction}.png`}
								alt={phase.title}
								width={directionSizes[phase.direction][0]}
								height={directionSizes[phase.direction][1]}
								loading="lazy"
							/>
						</div>
					)}
				</div>
			))}
		</div>
	)
}

export default Phases
