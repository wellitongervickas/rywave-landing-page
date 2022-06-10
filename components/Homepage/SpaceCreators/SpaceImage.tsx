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
			'h-[220px] w-[220px] transform transition-all duration-500 group-hover:scale-x-105 md:h-[290px] md:w-[290px]',
		])}
	>
		<Image
			src={image}
			alt={title}
			height={290}
			width={290}
			layout="responsive"
			priority
		/>
	</div>
)

export default SpaceImage
