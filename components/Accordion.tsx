import type { FC } from 'react'
import { useEffect } from 'react'

import { useState, useRef } from 'react'

import classnames from '@modules/handlers/classnames'

interface Accordion {
	className?: string
	opened: boolean
	heading: {
		title: string
		label: string
	}
	children: JSX.Element
}

const Accordion: FC<Accordion> = ({ opened, className, children, heading }) => {
	const content = useRef<HTMLDivElement>(null)
	const [maxSize, setMaxSize] = useState(0)
	const [isOpen, setIsOpen] = useState(opened ?? true)

	const doToggleAccordion = () => {
		setIsOpen(!isOpen)
	}

	useEffect(() => {
		setMaxSize(content.current?.scrollHeight || 0)
	}, [isOpen])

	useEffect(() => {
		setIsOpen(opened)
	}, [opened])

	return (
		<>
			<style jsx>
				{`
					--max-size: ${maxSize}px;
				`}
			</style>
			<section className={className}>
				<div
					className="flex cursor-pointer items-center justify-between space-x-6"
					onClick={doToggleAccordion}
				>
					<div className="flex items-center space-x-9">
						<span className="text-lg lg:text-4xl">{heading.label}</span>
						<h4 className="text-sm lg:text-lg">{heading.title}</h4>
					</div>
					<div>
						<div
							className={classnames.merge([
								'transform text-3xl transition-all duration-150',
								isOpen ? 'rotate-180' : 'rotate-45',
							])}
						>
							&#10005;
						</div>
					</div>
				</div>
				<div
					className={classnames.merge([
						'overflow-hidden transition-all duration-300',
						isOpen ? 'opacity-100' : 'opacity-0',
						isOpen ? 'h-[var(--max-size)]' : 'h-0',
					])}
				>
					<div
						ref={content}
						className={classnames.merge([
							'transition-all duration-150',
							isOpen ? 'visible' : 'invisible',
						])}
					>
						{children}
					</div>
				</div>
			</section>
		</>
	)
}

export default Accordion
