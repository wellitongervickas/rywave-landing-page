import type { FC } from 'react'

export const types = ['textarea'] as string[]

interface FormTextarea extends Form.Field {
	className?: string
}

const FormTextarea: FC<FormTextarea> = ({
	className,
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

			<textarea
				aria-labelledby={fieldId}
				title={label}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default FormTextarea
