import type { FC } from 'react'

import classnames from '@modules/handlers/classnames'

interface CardWrapper {
	children: any
	className?: string
}

const CardWrapper: FC<CardWrapper> = ({ children, className }) => (
	<div className={classnames.merge([className, 'bg-offwhite shadow-lg'])}>
		{children}
	</div>
)

export default CardWrapper
