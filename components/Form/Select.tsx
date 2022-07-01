import type { FC } from 'react'
import classnames from '@modules/handlers/classnames'
import { useFormContext } from 'react-hook-form'

export const types = ['select'] as string[]

interface FormSelect extends Form.Field {
	className?: string
}

const FormSelect: FC<FormSelect> = ({
	choices,
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
	}
	return (
		<div className="flex flex-col space-y-1">
			<label htmlFor={id}>
				<span id={id}>{label}</span>
				{isRequired && <span className="text-red-400">*</span>}
			</label>

			<select
				placeholder={placeholder}
				{...register(ID, options)}
				className={classnames.merge([
					'w-full bg-offwhite py-4 px-6 shadow-inner outline-none',
				])}
			>
				<option value="">Select</option>
				{choices?.map((choice, index) => (
					<option key={index} value={choice.value}>
						{choice.text}
					</option>
				))}
			</select>
			{errors[ID] && (
				<span className="text-red-400">{errors[ID]?.message?.toString()}</span>
			)}
		</div>
	)
}

export default FormSelect
