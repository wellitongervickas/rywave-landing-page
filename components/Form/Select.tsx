import type { FC } from 'react'

export const types = ['select'] as string[]

interface FormSelect extends Form.Field {
	className?: string
}

const FormSelect: FC<FormSelect> = ({
	className,
	choices,
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

			<select aria-labelledby={fieldId} title={label} placeholder={placeholder}>
				<option value="">Select</option>
				{choices?.map((choice, index) => (
					<option key={index} value={choice.value}>
						{choice.text}
					</option>
				))}
			</select>
		</div>
	)
}

export default FormSelect
