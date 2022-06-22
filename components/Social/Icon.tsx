import type { FC } from 'react'

import Image from '@components/Image'
import Link from '@components/Link'

interface SocialJoinIcon {
	link: string
	label: string
	image: string
}

const SocialJoinIcon: FC<SocialJoinIcon> = ({ link, label, image }) => (
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
)

export default SocialJoinIcon
