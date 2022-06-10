import type { FC } from 'react'

import classnames from '@modules/handlers/classnames'

import ArrowIcon from '@components/Icons/Arrow'

interface Action {}

const Action: FC<Action> = ({}) => (
	<>
		<a
			href="https://k9lsalmqwk5.typeform.com/to/foD9T6je?typeform-source=rywave.io"
			target="_blank"
			rel="noopener noreferrer"
			className={classnames.merge([
				'font-manrope',
				'group flex space-x-2  bg-white py-5 px-9 transition-all duration-150',
				'text-xl font-bold text-black shadow ring-1 ring-white hover:shadow-inner',
				'w-full hover:ring-opacity-80',
			])}
		>
			<span>Are you an Artist?</span>
			<ArrowIcon
				width={22}
				height={28}
				className="transition-transform duration-150 group-hover:translate-x-1"
			/>
		</a>
		<a
			href="https://linktr.ee/rywave"
			rel="noopener noreferrer"
			target="_blank"
			className={classnames.merge([
				'font-manrope',
				'group flex space-x-2 bg-offwhite py-5 px-9 transition-all duration-150',
				'text-xl font-bold text-white shadow  ring-1 ring-white hover:shadow-inner',
				'w-full hover:ring-opacity-80',
			])}
		>
			<span>Become a Member</span>
			<ArrowIcon
				width={22}
				height={28}
				className="transition-transform duration-150 group-hover:translate-x-1"
			/>
		</a>
	</>
)

export default Action
