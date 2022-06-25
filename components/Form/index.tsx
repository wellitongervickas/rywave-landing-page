import type { FC, FormEvent } from 'react'

import { useMemo, useCallback, useState } from 'react'
import FormInput, { types as inputTypes } from '@components/Form/Input'
import FormTextarea, { types as textareaTypes } from '@components/Form/Textarea'
import FormSelect, { types as selectTypes } from '@components/Form/Select'
import useForm from '@modules/hooks/useForm'

interface Form {
	form: Form.Content
	onSubmit(value: any): void
}

const Form: FC<Form> = ({ form, onSubmit }) => {
	const { state, validateFields } = useForm()
	const [error, setError] = useState('')

	const button = useMemo(
		() => ({
			text: form.button.text || 'Submit',
			type: form.button.type || ('submit' as any),
		}),
		[form.button]
	)

	const doSubmit = useCallback(
		(event: FormEvent) => {
			event.preventDefault()

			const fields = Object.fromEntries(
				Object.keys(state).map((key) => [key, state[key].value])
			)

			const isFieldsValid = validateFields(form.fields)

			if (isFieldsValid) {
				onSubmit(fields)
			} else {
				setError('Please, check the fields and try again.')
			}
		},
		[form.fields, state, onSubmit, validateFields]
	)

	return (
		<form onSubmit={doSubmit} noValidate>
			<div className="flex flex-col space-y-6">
				{form.fields.map((field) => (
					<div key={field.id}>
						{inputTypes.includes(field.type) && <FormInput {...field} />}
						{textareaTypes.includes(field.type) && <FormTextarea {...field} />}
						{selectTypes.includes(field.type) && <FormSelect {...field} />}
					</div>
				))}
			</div>
			{error && <div>{error}</div>}
			<div>
				<button type={button.type}>{button.text}</button>
			</div>
		</form>
	)
}

export default Form
