import type { FC } from 'react'

import React, { useMemo } from 'react'
import FormInput, { types as inputTypes } from '@components/Form/Input'
import FormTextarea, { types as textareaTypes } from '@components/Form/Textarea'
import FormSelect, { types as selectTypes } from '@components/Form/Select'
import classnames from '@modules/handlers/classnames'
import ArrowIcon from '@components/Icons/Arrow'

import { useForm, FormProvider } from 'react-hook-form'

interface Form {
	form: Form.Content
	onSubmit(value: any): void
}

const Form: FC<Form> = ({ form, onSubmit }) => {
	const methods = useForm({
		mode: 'onChange',
	})

	const {
		handleSubmit,
		formState: { isValid },
	} = methods

	const button = useMemo(
		() => ({
			text: form.button.text || 'Submit',
			type: form.button.type || ('submit' as any),
		}),
		[form.button]
	)

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
				<div className="flex flex-col space-y-6">
					{form.fields.map((field) => (
						<div key={field.id}>
							{inputTypes.includes(field.type) && <FormInput {...field} />}
							{textareaTypes.includes(field.type) && (
								<FormTextarea {...field} />
							)}
							{selectTypes.includes(field.type) && <FormSelect {...field} />}
						</div>
					))}
				</div>
				<div>
					<button
						type="submit"
						disabled={!isValid}
						className={classnames.merge([
							'font-manrope disabled:opacity-40',
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
		</FormProvider>
	)
}

export default Form
