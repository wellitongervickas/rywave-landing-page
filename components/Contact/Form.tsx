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
	const [error, setError] = useState('')

	const doSubmit = async (data: { [key: string]: any }) => {
		setIsSubmiting(true)

		const w = window as any
		let token

		if ((w as any)?.grecaptcha?.execute) {
			token = await w.grecaptcha.execute(process.env.RECAPTCHA_SITE_KEY, {
				action: 'submit',
			})
		}

		if (!token) {
			setError('Recaptcha tokens must be provided!')
			return
		}

		const result = await services.forms.submit(form.id, {
			fields: data,
			token,
		})

		if (!result) {
			setError('Submission failed, try again later.')
		} else {
			setIsSuccess(result)
		}

		setIsSubmiting(false)
	}

	return (
		<div className={classnames.merge([className, 'space-y-6'])}>
			<h2 className="text-2xl uppercase text-gray-stroke">
				Also you can contact us
			</h2>
			{isSuccess ? (
				<div className=" text-green-500">
					Thanks for contacting us! We will get in touch with you shortly
				</div>
			) : (
				<Form
					form={form}
					onSubmit={doSubmit}
					submiting={isSubmiting}
					error={error}
				/>
			)}
		</div>
	)
}

export default ContactForm
