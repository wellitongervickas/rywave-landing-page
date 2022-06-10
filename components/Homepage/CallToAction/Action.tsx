import type { FC } from 'react'

import classnames from '@modules/handlers/classnames'

import ArrowIcon from '@components/Icons/Arrow'

interface Action {}

const Action: FC<Action> = ({}) => (
	<>
		<button
			type="button"
			className={classnames.merge([
				'font-manrope',
				'group flex space-x-2 border border-white bg-white py-5 px-9 transition-all duration-150',
				'text-xl font-bold text-black hover:border-primary',
			])}
		>
			<span>Are you an Artist?</span>
			<ArrowIcon
				width={22}
				height={28}
				className="transition-transform duration-150 group-hover:translate-x-1"
			/>
		</button>
		<button
			type="button"
			className={classnames.merge([
				'font-manrope',
				'group flex space-x-2 border border-white bg-offwhite py-5 px-9 transition-all duration-150',
				'text-xl font-bold text-white hover:border-primary',
			])}
		>
			<span>Become a Member</span>
			<ArrowIcon
				width={22}
				height={28}
				className="transition-transform duration-150 group-hover:translate-x-1"
			/>
		</button>
	</>
)

export default Action
