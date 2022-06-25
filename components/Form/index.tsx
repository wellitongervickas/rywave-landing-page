import type { FC } from 'react'

import React, { useMemo } from 'react'
import FormInput, { types as inputTypes } from '@components/Form/Input'
import FormTextarea, { types as textareaTypes } from '@components/Form/Textarea'
import FormSelect, { types as selectTypes } from '@components/Form/Select'
import classnames from '@modules/handlers/classnames'
import ArrowIcon from '@components/Icons/Arrow'

import { useForm } from 'react-hook-form'

interface Form {
	form: Form.Content
	onSubmit(value: any): void
}

const Form: FC<Form> = ({ form, onSubmit }) => {
	const {
		handleSubmit,
		formState: { errors },
	} = useForm()

	const button = useMemo(
		() => ({
			text: form.button.text || 'Submit',
			type: form.button.type || ('submit' as any),
		}),
		[form.button]
	)

	const doSubmit = (data: Object) => {
		console.log(data, errors)

		// if (Object.keys(errors).length) return

		// const fields = Object.fromEntries(
		// 	Object.keys(data).map((key) => [key, state[key]])
		// )

		// onSubmit(fields)
	}

	return (
		<form onSubmit={handleSubmit(doSubmit)} noValidate className="space-y-6">
			<div className="flex flex-col space-y-6">
				{form.fields.map((field) => (
					<div key={field.id}>
						{inputTypes.includes(field.type) && <FormInput {...field} />}
						{textareaTypes.includes(field.type) && <FormTextarea {...field} />}
						{selectTypes.includes(field.type) && <FormSelect {...field} />}
					</div>
				))}
			</div>
			<div>
				<button
					type={button.type}
					className={classnames.merge([
						'font-manrope',
						'group flex space-x-2  bg-white py-5 px-9 transition-all duration-150',
						'font-bold text-black shadow ring-1 ring-white hover:shadow-inner',
						'w-full hover:ring-opacity-80 md:w-auto',
					])}
				>
					<span>{button.text}</span>
					<ArrowIcon
						width={22}
						height={28}
						className="transition-transform duration-150 group-hover:translate-x-1"
					/>
				</button>
			</div>
		</form>
	)
}

export default Form
