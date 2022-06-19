import type { FC } from 'react'
import Link from '@components/Link'
import classnames from '@modules/handlers/classnames'
import appConfig from '@app.config'

interface Logo {
	className?: string
	width?: number
	height?: number
	url?: string
}

const title = `${appConfig.name} ${appConfig.description}`

const Logo: FC<Logo> = ({ className, height = 28, width = 134, url }) => (
	<div className={classnames.merge([className, 'select-none'])}>
		<Link href={url || '/'}>
			<a title={title} aria-labelledby="logo">
				<div className="cursor-pointer md:w-auto">
					<svg
						id="logo"
						width={width}
						height={height}
						viewBox="0 0 134 28"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						aria-label={title}
					>
						<rect
							x="0.333496"
							y="8"
							width="4"
							height="16"
							rx="2"
							fill="currentColor"
						/>
						<rect x="6.3335" width="4" height="16" rx="2" fill="currentColor" />
						<rect
							x="12.3335"
							y="6"
							width="4"
							height="14"
							rx="2"
							fill="currentColor"
						/>
						<rect
							x="18.3335"
							width="4"
							height="16"
							rx="2"
							fill="currentColor"
						/>
						<rect
							x="24.3335"
							y="8"
							width="4"
							height="16"
							rx="2"
							fill="currentColor"
						/>
						<path
							d="M49.304 17.072C50.44 16.592 51.128 15.68 51.128 14.144C51.128 11.728 49.4 10.752 46.776 10.752H38.376V22H40.424V18.208H47.384C48.664 18.208 48.952 18.496 48.952 19.632V22H50.984V19.136C50.984 17.984 50.392 17.264 49.304 17.072ZM46.248 12.56C47.416 12.56 48.936 12.56 48.936 14.48C48.936 16.416 47.416 16.416 46.248 16.416H40.424V12.56H46.248ZM59.6654 16.544L54.5294 10.752H51.8254L58.5614 18.304V22H60.7534V18.304L67.4894 10.752H64.7854L59.6654 16.544ZM85.996 20.176L82.044 10.752H79.004L74.78 20.176L70.908 10.752H68.716L73.42 22H76.108L80.508 12.224L84.652 22H87.324L92.316 10.752H90.124L85.996 20.176ZM105.738 22L99.2263 10.752H96.6343L90.1223 22H92.4583L93.8503 19.568H102.026L103.418 22H105.738ZM97.9303 12.448L101.002 17.808H94.8583L97.9303 12.448ZM110.399 20.304L104.927 10.752H102.591L109.103 22H111.695L118.207 10.752H115.887L110.399 20.304ZM119.923 10.752V22H131.763V20.224H121.971V17.264H131.443V15.488H121.971V12.544H131.763V10.752H119.923Z"
							fill="currentColor"
						/>
					</svg>
				</div>
			</a>
		</Link>
	</div>
)

export default Logo
