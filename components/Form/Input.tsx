import type { FC } from 'react'
import classnames from '@modules/handlers/classnames'
import { useForm } from 'react-hook-form'

export const types = ['text', 'email'] as string[]

interface FormInput extends Form.Field {}

const FormInput: FC<FormInput> = ({
	type,
	id,
	label,
	placeholder,
	isRequired,
}) => {
	const {
		register,
		formState: { errors },
	} = useForm()

	return (
		<div className="flex flex-col space-y-1">
			<label htmlFor={id}>
				<span id={id}>{label}</span>
				{isRequired && <span className="text-red-400">*</span>}
			</label>
			<input
				aria-labelledby={id}
				title={label}
				type={type}
				placeholder={placeholder}
				className={classnames.merge([
					'w-full bg-offwhite py-4 px-6 shadow-inner outline-none',
				])}
				{...register(`field_${id}`, { required: isRequired })}
			/>
			{errors[id] && (
				<span className="text-red-400">{errors[id]?.message?.toString()}</span>
			)}
		</div>
	)
}

export default FormInput
