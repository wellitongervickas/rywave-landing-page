import type { FC } from 'react'
import { useRef } from 'react'

import CardWrapper from '@components/CardWrapper'
import Image from '@components/Image'
import classnames from '@modules/handlers/classnames'

interface HowWork {}

const HowWork: FC<HowWork> = () => {
	const { current: topics } = useRef([
		{
			image: '/assets/images/homepage/how-work/transparency.svg',
			imageOrder: 1,
			title: 'Transparency',
			text: "<p>Our artists become creators of intellectual property and the creators of their own artistic presence, putting them in the driver's seat.</p><p>The platform is open to all artists and listeners, and is transparent to all parties involved The insights platform showcases all revenue the artist produces on our network, along with their streaming data and crowd funding resources.</p>",
			textOrder: 2,
		},
		{
			image: '/assets/images/homepage/how-work/equality.svg',
			imageOrder: 2,
			title: 'Equality',
			text: '<p>Every artist, no matter the size, is given an equal chance to showcase their art through the community and our streaming platform, the Discotheque.</p><p>For the purpose of engaging every artist in equal manner, we will be hosting daily community voting contests containing various prizes.</p>',
			textOrder: 1,
		},
		{
			image: '/assets/images/homepage/how-work/promotion.svg',
			imageOrder: 1,
			title: 'Promotion',
			text: '<p>Selected artists are connected to a design and marketing team to help you reach a wider audience.</p><p>Through the Rywave community we offer plenty of opportunities to promote your art via contests and social media.</p>',
			textOrder: 2,
		},
	])

	return (
		<section className="py-28">
			<h2 className="mb-12 text-5xl font-black">
				A unique space
				<br />
				for Creators
			</h2>
			<div className="grid grid-cols-1 gap-5">
				{topics.map((topic, index) => (
					<CardWrapper
						key={index}
						className="col-span-1 flex items-center gap-16 p-16"
					>
						<div className={`order-${topic.imageOrder}`}>
							<Image
								src={topic.image}
								alt={topic.title}
								height={290}
								width={290}
								layout="fixed"
								loading="lazy"
							/>
						</div>
						<div className={classnames.merge([`order-${topic.textOrder}`])}>
							<h3 className="text-xl text-[1.75rem] font-black">
								{topic.title}
							</h3>
							<div
								className="text-gray-stroke space-y-6 text-xl leading-6"
								dangerouslySetInnerHTML={{ __html: topic.text }}
							/>
						</div>
					</CardWrapper>
				))}
			</div>
		</section>
	)
}

export default HowWork
