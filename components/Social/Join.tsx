import type { FC } from 'react'

import appConfig from '@app.config'
import classnames from '@modules/handlers/classnames'
import SocialJoinIcon from './Icon'

const { social } = appConfig

interface SocialJoin {
	className?: string
}

const SocialJoin: FC<SocialJoin> = ({ className }) => (
	<div className={classnames.merge([className, 'space-y-3 text-center'])}>
		<ul className="flex space-x-[1.62rem]">
			{Object.values(social).map((item, index) => (
				<li key={index}>
					<SocialJoinIcon {...item} />
				</li>
			))}
		</ul>
	</div>
)

export default SocialJoin
