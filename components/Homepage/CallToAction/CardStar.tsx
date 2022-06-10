import type { FC } from 'react'

interface CardStar {}

const CardStar: FC<CardStar> = () => (
	<div className="absolute top-[25%] -left-12 z-[12] !mx-0 !my-0 hidden translate-x-1/2 transform lg:-left-0 lg:top-[45%] lg:block">
		<svg
			width="157"
			height="166"
			viewBox="0 0 157 166"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M84.3029 64.5358L84.4319 65.84L85.284 65.0001L123.218 27.6102L94.5719 73.1655L93.9285 74.1888L95.1782 74.0967L150.817 69.9955L98.7259 85.6439L97.5558 85.9954L98.7259 86.6862L150.817 117.44L95.1782 97.2047L93.9285 96.7501L94.5719 97.96L123.218 151.822L85.284 103.432L84.4319 102.345L84.3029 103.612L78.5626 160.009L72.8223 101.947L72.6934 100.643L71.8413 101.483L33.9069 138.873L62.5533 93.3175L63.1968 92.2943L61.947 92.3864L6.30811 96.4875L58.3993 80.8391L59.5694 80.4876L58.3993 79.7968L6.30811 49.0427L61.947 69.2784L63.1968 69.7329L62.5533 68.523L33.9069 14.6607L71.8413 63.051L72.6934 64.138L72.8223 62.8712L78.5626 6.4742L84.3029 64.5358Z"
				stroke="white"
				strokeWidth="1.13908"
			/>
		</svg>
	</div>
)

export default CardStar
