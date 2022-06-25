import type { FC, ChangeEvent } from 'react'
import useForm from '@modules/hooks/useForm'

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
	const { onchange } = useForm()

	const doOnChange = (ev: ChangeEvent<HTMLSelectElement>) => {
		onchange(id, ev.target.value)
	}

	return (
		<div className={className}>
			<label htmlFor={id}>
				<span id={id}>{label}</span>
				{isRequired && <span className="text-red-400">*</span>}
			</label>

			<select
				aria-labelledby={id}
				title={label}
				placeholder={placeholder}
				onChange={doOnChange}
			>
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
