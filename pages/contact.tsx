import type { NextPage } from 'next'

import appConfig from '@app.config'
import SocialJoin from '@components/Social/Join'
import services from '@modules/services'
import ContactForm from '@components/Contact/Form'

interface Contact {
	title: string
	form?: Form.Content
}

export async function getServerSideProps() {
	try {
		const CONTACT_FORM_ID = '1'
		const form = await services.forms.byId(CONTACT_FORM_ID)

		console.log(form)

		return {
			props: {
				title: 'Contact',
				description: 'Contact Us',
				form,
			} as Contact,
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

const Contact: NextPage<Contact> = ({ title, form }) => {
	return (
		<div className="space-y-12 py-20 container">
			<h1 className="mb-6 font-astrospace text-3xl font-black md:text-5xl">
				{title}
			</h1>
			<div>
				<h2 className="text-2xl uppercase text-gray-stroke">
					You can find us on social media
				</h2>
				<SocialJoin className="pt-4" />
			</div>
			<div>
				{form ? (
					<ContactForm form={form} />
				) : (
					<>
						<h2 className="text-2xl uppercase text-gray-stroke">
							Also you can contact us via email
						</h2>
						<p className="pt-4">
							<a href={`mailto:${appConfig.emails.contact}`}>
								{appConfig.emails.contact}
							</a>
						</p>
					</>
				)}
			</div>
		</div>
	)
}
export default Contact
