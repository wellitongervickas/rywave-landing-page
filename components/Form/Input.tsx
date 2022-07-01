import type { FC } from 'react'
import classnames from '@modules/handlers/classnames'
import { useFormContext } from 'react-hook-form'

export const types = ['text', 'email'] as string[]

interface FormInput extends Form.Field {}

const FormInput: FC<FormInput> = ({
	type,
	id,
	label,
	placeholder,
	isRequired,
}) => {
	const ID = `${id}`

	const {
		register,
		formState: { errors },
	} = useFormContext()

	const options = {
		required: isRequired && 'Field is required!',
		pattern:
			type === 'email'
				? {
						value:
							/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						message: 'Invalid e-mail',
				  }
				: undefined,
	}

	return (
		<div className="flex flex-col space-y-1">
			<label htmlFor={ID}>
				<span>{label}</span>
				{isRequired && <span className="text-red-400">*</span>}
			</label>
			<input
				title={label}
				type={type}
				placeholder={placeholder}
				className={classnames.merge([
					'w-full bg-offwhite py-4 px-6 shadow-inner outline-none',
				])}
				{...register(ID, options)}
			/>
			{errors[ID] && (
				<span className="text-red-400">{errors[ID]?.message?.toString()}</span>
			)}
		</div>
	)
}

export default FormInput
