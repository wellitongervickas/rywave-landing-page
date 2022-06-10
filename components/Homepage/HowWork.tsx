import type { FC } from 'react'

interface HowWork {}

const HowWork: FC<HowWork> = () => (
	<section>
		<h2 className="mb-4 text-5xl font-black">
			How doest it
			<br /> work?
		</h2>
		<div className="text-gray-stroke space-y-2 text-xl">
			<p>
				At Rywave, we are igniting a revolution in music sharing and
				development.
			</p>
			<p>
				Our Ecosystem consists of three components that guarantee transparency
				and direct interactions between the artist and the listener.
			</p>
		</div>
	</section>
)

export default HowWork
