import type { FC } from 'react'

import classnames from '@modules/handlers/classnames'

interface Play extends React.SVGProps<SVGSVGElement> {}

const Play: FC<Play> = (props) => (
	<>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width={`${props.width || '32px'}`}
			height={`${props.height || '32px'}`}
			version="1.1"
			viewBox="0 0 752 752"
			fill="currentColor"
			{...props}
			className={classnames.merge(props.className)}
		>
			<path
				fillRule="evenodd"
				clipRule="currentColor"
				d="m513.34 343.32-194.17-116.03c-11.84-7.1055-26.047-7.1055-38.359-0.47266-11.84 6.6289-19.418 18.941-19.418 33.152v232.53c0 13.734 7.1055 26.047 19.418 33.152 5.6836 3.3164 12.312 5.2109 18.469 5.2109 6.6289 0 13.262-1.8945 19.418-5.6836l194.64-116.5c11.367-7.1055 18.469-18.941 18.469-32.676 0-13.262-7.1016-25.574-18.469-32.68zm-19.418 32.676-194.17 116.5v-233z"
			/>
		</svg>
	</>
)

export default Play
