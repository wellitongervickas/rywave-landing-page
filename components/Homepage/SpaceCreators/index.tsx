import type { FC } from 'react'
import { useRef } from 'react'

import CardWrapper from '@components/CardWrapper'
import SpaceImage from '@components/Homepage/SpaceCreators/SpaceImage'
import Image from '@components/Image'

interface HomepageSpaceCreators {}

const HomepageSpaceCreators: FC<HomepageSpaceCreators> = () => {
	const { current: topics } = useRef([
		{
			image: '/assets/images/homepage/space-creators/transparency.svg',
			title: 'Transparency',
			text: "<p>Our artists become creators of intellectual property and the creators of their own artistic presence, putting them in the driver's seat.</p><p>The platform is open to all artists and listeners, and is transparent to all parties involved The insights platform showcases all revenue the artist produces on our network, along with their streaming data and crowd funding resources.</p>",
			layout: 'left',
		},
		{
			image: '/assets/images/homepage/space-creators/equality.svg',
			title: 'Equality',
			text: '<p>Every artist, no matter the size, is given an equal chance to showcase their art through the community and our streaming platform, the Discotheque.</p><p>For the purpose of engaging every artist in equal manner, we will be hosting daily community voting contests containing various prizes.</p>',
			layout: 'right',
		},
		{
			image: '/assets/images/homepage/space-creators/promotion.svg',
			title: 'Promotion',
			text: '<p>Selected artists are connected to a design and marketing team to help you reach a wider audience.</p><p>Through the Rywave community we offer plenty of opportunities to promote your art via contests and social media.</p>',
			layout: 'left',
		},
	])

	return (
		<section className="py-20 lg:py-28">
			<h2 className="mb-12 text-5xl font-black">
				A unique space
				<br />
				for Creators
			</h2>
			<div className="space-y-5">
				{topics.map((topic, index) => (
					<CardWrapper
						key={index}
						className="group col-span-1 flex flex-col items-center gap-16 p-16 lg:flex-row"
					>
						{topic.layout === 'left' && (
							<SpaceImage className="order-1 lg:order-none" {...topic} />
						)}
						<div className="order-2 space-y-6 lg:order-none">
							<h3 className="text-xl text-[1.75rem] font-black">
								{topic.title}
							</h3>
							<div
								className="text-gray-stroke space-y-6 text-xl leading-6"
								dangerouslySetInnerHTML={{ __html: topic.text }}
							/>
						</div>
						{topic.layout === 'right' && (
							<SpaceImage className="order-1 lg:order-none" {...topic} />
						)}
					</CardWrapper>
				))}
			</div>
		</section>
	)
}

export default HomepageSpaceCreators