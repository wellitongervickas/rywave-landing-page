import type { FC } from 'react'

import ImageComponent, { ImageProps } from 'next/image'

import classnames from '@modules/handlers/classnames'

interface Image extends Partial<ImageProps> {
	className?: string
	src: string
}

const Image: FC<Image> = (props) => {
	return (
		<ImageComponent
			blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkyAAAAG4AakFoPtQAAAAASUVORK5CYII="
			{...props}
			className={classnames.merge([props.className])}
		/>
	)
}

export default Image
