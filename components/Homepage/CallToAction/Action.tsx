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
				'font-bold text-black shadow ring-1 ring-white hover:shadow-inner',
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
			href="https://discord.gg/SYwtd3CZcQ"
			rel="noopener noreferrer"
			target="_blank"
			className={classnames.merge([
				'font-manrope',
				'group flex space-x-2 bg-offwhite py-5 px-9 shadow-lg transition-all duration-150',
				'font-bold text-white ring-1 ring-gray-stroke hover:shadow-inner',
				'w-full hover:ring-opacity-70',
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
