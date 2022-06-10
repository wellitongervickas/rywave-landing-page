import type { FC } from 'react'

import Image from '@components/Image'

interface SpaceImage {
	image: string
	title: string
}

const SpaceImage: FC<SpaceImage> = ({ image, title }) => (
	<div className="transform transition-all duration-500 group-hover:scale-x-105">
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
