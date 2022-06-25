import type { FC, FormEvent } from 'react'

import { useMemo } from 'react'
import FormInput, { types as inputTypes } from '@components/Form/Input'
import FormTextarea, { types as textareaTypes } from '@components/Form/Textarea'
import FormSelect, { types as selectTypes } from '@components/Form/Select'

interface Form {
	form: Form.Content
	onSubmit(value: any): void
}

const Form: FC<Form> = ({ form, onSubmit }) => {
	const button = useMemo(
		() => ({
			text: form.button.text || 'Submit',
			type: form.button.type || ('submit' as any),
		}),
		[form.button]
	)

	const doSubmit = (event: FormEvent) => {
		event.preventDefault()

		onSubmit({})
	}

	return (
		<form onSubmit={doSubmit} noValidate>
			<div className="flex flex-col space-y-6">
				{form.fields.map((field) => (
					<>
						{inputTypes.includes(field.type) && (
							<FormInput key={field.id} {...field} />
						)}
						{textareaTypes.includes(field.type) && (
							<FormTextarea key={field.id} {...field} />
						)}
						{selectTypes.includes(field.type) && (
							<FormSelect key={field.id} {...field} />
						)}
					</>
				))}
			</div>
			<div>
				<button type={button.type}>{button.text}</button>
			</div>
		</form>
	)
}

export default Form
