import type { FC } from 'react'
import CardWrapper from '@components/CardWrapper'
import classnames from '@modules/handlers/classnames'

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
					<div>
						{phase.items.map((item, itemIndex) => (
							<div key={itemIndex} className="flex justify-start space-x-2">
								<div className="flex flex-none items-start justify-center">
									<span
										className={classnames.merge([
											'inline-block h-full w-6',
											item.done
												? 'mt-2 h-[0.1rem] bg-green-400'
												: 'border-gray-stroke mt-1 h-4 w-4 rounded border',
										])}
									/>
								</div>
								<div
									className="text-gray-stroke flex-1"
									dangerouslySetInnerHTML={{ __html: item.text }}
								/>
							</div>
						))}
					</div>
				</CardWrapper>
			))}
		</div>
	)
}

export default Phases
