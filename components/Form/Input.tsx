import type { FC } from 'react'

export const types = ['text', 'email'] as string[]

interface FormInput extends Form.Field {
	className?: string
}

const FormInput: FC<FormInput> = ({
	className,
	type,
	id,
	label,
	placeholder,
	isRequired,
}) => {
	const fieldId = `field-${id}`

	return (
		<div className={className}>
			<label htmlFor={fieldId}>
				<span id={fieldId}>{label}</span>
				{isRequired && <span className="text-red-400">*</span>}
			</label>

			<input
				aria-labelledby={fieldId}
				title={label}
				type={type}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default FormInput
