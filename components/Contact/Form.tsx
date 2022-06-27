import type { FC } from 'react'
import Form from '@components/Form'
import classnames from '@modules/handlers/classnames'

interface ContactForm {
	className?: string
	form: Form.Content
}

const ContactForm: FC<ContactForm> = ({ className, form }) => (
	<div className={classnames.merge([className, 'space-y-6'])}>
		<h2 className="text-2xl uppercase text-gray-stroke">
			Also you can contact us
		</h2>
		<Form form={form} onSubmit={(e) => console.log(e)} />
	</div>
)

export default ContactForm
