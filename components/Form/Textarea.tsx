import type { FC } from 'react'
import classnames from '@modules/handlers/classnames'
import { useFormContext } from 'react-hook-form'
export const types = ['textarea'] as string[]

interface FormTextarea extends Form.Field {}

const FormTextarea: FC<FormTextarea> = ({
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
			<label htmlFor={ID}>
				<span>{label}</span>
				{isRequired && <span className="text-red-400">*</span>}
			</label>

			<textarea
				placeholder={placeholder}
				rows={6}
				{...register(ID, options)}
				className={classnames.merge([
					'w-full bg-offwhite py-4 px-6 shadow-inner outline-none',
				])}
			/>
			{errors[ID] && (
				<span className="text-red-400">{errors[ID]?.message?.toString()}</span>
			)}
		</div>
	)
}

export default FormTextarea
