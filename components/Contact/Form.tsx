import type { FC } from 'react'
import { useState } from 'react'
import Form from '@components/Form'
import classnames from '@modules/handlers/classnames'
import services from '@modules/services'

interface ContactForm {
	className?: string
	form: Form.Content
}

const ContactForm: FC<ContactForm> = ({ className, form }) => {
	const [isSubmiting, setIsSubmiting] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)

	const doSubmit = async (data: Object) => {
		setIsSubmiting(true)
		const result = await services.forms.submit(form.id, data)
	}

	return (
		<div className={classnames.merge([className, 'space-y-6'])}>
			<h2 className="text-2xl uppercase text-gray-stroke">
				Also you can contact us
			</h2>
			<Form form={form} onSubmit={doSubmit} submiting={isSubmiting} />
		</div>
	)
}

export default ContactForm
