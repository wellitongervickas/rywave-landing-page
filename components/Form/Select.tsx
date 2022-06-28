import type { FC, ChangeEvent } from 'react'
import classnames from '@modules/handlers/classnames'
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
	const doOnChange = (ev: ChangeEvent<HTMLSelectElement>) => {}

	return (
		<div className="flex flex-col space-y-1">
			<label htmlFor={id}>
				<span id={id}>{label}</span>
				{isRequired && <span className="text-red-400">*</span>}
			</label>

			<select
				aria-labelledby={id}
				title={label}
				placeholder={placeholder}
				onChange={doOnChange}
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
		</div>
	)
}

export default FormSelect
