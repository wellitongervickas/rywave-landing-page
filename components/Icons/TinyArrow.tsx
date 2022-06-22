import type { FC } from 'react'

import classnames from '@modules/handlers/classnames'

interface TinyArrow extends React.SVGProps<SVGSVGElement> {}

const TinyArrow: FC<TinyArrow> = (props) => (
	<>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width={`${props.width || '32px'}`}
			height={`${props.height || '32px'}`}
			viewBox="0 0 9 13"
			fill="currentColor"
			{...props}
			className={classnames.merge(props.className)}
		>
			<path
				d="M1.17969 5.8125C0.933594 6.05859 0.933594 6.46875 1.17969 6.71484L6.48438 12.0469C6.75781 12.293 7.16797 12.293 7.41406 12.0469L8.04297 11.418C8.28906 11.1719 8.28906 10.7617 8.04297 10.4883L3.83203 6.25L8.04297 2.03906C8.28906 1.76562 8.28906 1.35547 8.04297 1.10938L7.41406 0.480469C7.16797 0.234375 6.75781 0.234375 6.48438 0.480469L1.17969 5.8125Z"
				fill="currentColor"
				clipRule="currentColor"
			/>
		</svg>
	</>
)

export default TinyArrow
