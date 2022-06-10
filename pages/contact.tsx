import SocialJoin from '@components/Social/Join'
import type { NextPage } from 'next'

interface Contact {
	title: string
}

export function getStaticProps() {
	return {
		props: {
			title: 'Contact',
		},
	}
}

const Contact: NextPage<Contact> = () => {
	return (
		<div className="space-y-12 py-20 container">
			<h2 className="mb-6 font-astrospace text-3xl font-black md:text-5xl">
				Contact
			</h2>
			<div>
				<h3 className="text-2xl uppercase text-gray-stroke">
					You can find us on social media
				</h3>
				<SocialJoin className="pt-4" />
			</div>
			<div>
				<h3 className="text-2xl uppercase text-gray-stroke">
					Also you can contact us via email
				</h3>
				<p className="pt-4">
					<a href="mailto:contact@rywave.io">contact@rywave.io</a>
				</p>
			</div>
		</div>
	)
}
export default Contact
