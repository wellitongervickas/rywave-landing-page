import type { FC } from 'react'

import Image from '@components/Image'
import classnames from '@modules/handlers/classnames'

interface SpaceImage {
	image: string
	title: string
	className?: string
}

const SpaceImage: FC<SpaceImage> = ({ image, title, className }) => (
	<div
		className={classnames.merge([
			className,
			'transform transition-all duration-500 group-hover:scale-x-105',
		])}
	>
		<Image
			src={image}
			alt={title}
			height={290}
			width={290}
			layout="fixed"
			loading="lazy"
		/>
	</div>
)

export default SpaceImage
