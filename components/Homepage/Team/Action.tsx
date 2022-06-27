import type { FC } from 'react'

import classnames from '@modules/handlers/classnames'

import ArrowIcon from '@components/Icons/Arrow'
import TinyArrow from '@components/Icons/TinyArrow'
import appConfig from '@app.config'

interface TeamAction {
	className?: string
}

const TeamAction: FC<TeamAction> = ({ className }) => (
	<div
		className={classnames.merge([
			className,
			'flex items-center justify-center	',
		])}
	>
		<div className="flex flex-col space-y-4 space-x-0 lg:flex-row lg:space-y-0 lg:space-x-4">
			<a
				href="/contact"
				target="_blank"
				rel="noopener noreferrer"
				className={classnames.merge([
					'font-manrope',
					'group flex space-x-2 bg-offwhite py-4 px-6 shadow-lg transition-all duration-150',
					'font-bold text-white ring-1 ring-gray-stroke hover:shadow-inner',
					'items-center hover:ring-opacity-70',
				])}
			>
				<span>Learn More about our Team</span>
				<ArrowIcon
					width={22}
					height={28}
					className="transition-transform duration-150 group-hover:translate-x-1"
				/>
			</a>
			<a
				href={appConfig.social.discord.link}
				rel="noopener noreferrer"
				target="_blank"
				className={classnames.merge([
					'font-manrope',
					'group flex space-x-2  bg-white py-4 px-6 transition-all duration-150',
					'font-bold text-black shadow ring-1 ring-white hover:shadow-inner',
					'items-center hover:ring-opacity-80',
				])}
			>
				<span>Join Us!</span>
				<TinyArrow
					width={12}
					height={12}
					className="-rotate-180 transform transition-transform duration-150 group-hover:translate-x-1"
				/>
			</a>
		</div>
	</div>
)

export default TeamAction
