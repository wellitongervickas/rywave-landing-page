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
			'flex h-full w-full items-center justify-center',
		])}
	>
		<div
			className={classnames.merge([
				'relative group-hover:scale-x-105 2xl:h-[290px] 2xl:w-[290px]',
				'h-[200px] w-[200px] transform transition-all duration-500 md:h-[180px] md:w-[180px]',
			])}
		>
			<Image
				src={image}
				alt={title}
				layout="responsive"
				width={290}
				height={290}
				priority
			/>
		</div>
	</div>
)

export default SpaceImage
