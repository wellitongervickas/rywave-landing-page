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
				'group flex space-x-2  bg-white py-5 px-9 transition-all duration-150',
				'text-xl font-bold text-black shadow ring-1 ring-white hover:shadow-inner',
				'hover:ring-opacity-80',
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
				'group flex space-x-2 bg-offwhite py-5 px-9 transition-all duration-150',
				'text-xl font-bold text-white shadow  ring-1 ring-white hover:shadow-inner',
				'hover:ring-opacity-80',
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
