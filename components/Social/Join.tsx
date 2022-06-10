import type { FC } from 'react'

import appConfig from '@app.config'
import Image from '@components/Image'
import Link from '@components/Link'
import classnames from '@modules/handlers/classnames'

const { social } = appConfig

interface SocialJoin {
	className?: string
}

const SocialJoin: FC<SocialJoin> = ({ className }) => (
	<div className={classnames.merge([className, 'space-y-3 text-center'])}>
		<ul className="flex space-x-[1.62rem]">
			{social.map(({ label, image, link }, index) => (
				<li key={index}>
					<Link href={link} passHref>
						<a target="_blank" rel="noopener noreferrer" className="group">
							<Image
								alt={label}
								src={image}
								width={24}
								height={24}
								layout="intrinsic"
								placeholder="empty"
								priority={false}
								className="h-6 w-6 transition duration-150 ease-in-out group-hover:opacity-75"
							/>
						</a>
					</Link>
				</li>
			))}
		</ul>
	</div>
)

export default SocialJoin
