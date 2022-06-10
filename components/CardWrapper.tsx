import type { FC } from 'react'

import classnames from '@modules/handlers/classnames'

interface CardWrapper {
	children: JSX.Element | JSX.Element[]
	className?: string
}

const CardWrapper: FC<CardWrapper> = ({ children, className }) => (
	<div className={classnames.merge([className, 'bg-offwhite'])}>{children}</div>
)

export default CardWrapper
