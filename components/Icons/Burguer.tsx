import type { FC } from 'react'

import classnames from '@modules/handlers/classnames'

interface BurguerIcon extends React.SVGProps<SVGSVGElement> {}

const BurguerIcon: FC<BurguerIcon> = (props) => (
	<>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width={`${props.width || '32px'}`}
			height={`${props.height || '32px'}`}
			viewBox="0 0 122.879 103.609"
			fill="currentColor"
			{...props}
			className={classnames.merge(props.className)}
		>
			<g>
				<path
					fillRule="evenodd"
					clipRule="currentColor"
					d="M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z"
				/>
			</g>
		</svg>
	</>
)

export default BurguerIcon
