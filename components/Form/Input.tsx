import type { FC, ChangeEvent } from 'react'
import useForm from '@modules/hooks/useForm'

export const types = ['text', 'email'] as string[]

interface FormInput extends Form.Field {
	className?: string
	error?: string
}

const FormInput: FC<FormInput> = ({
	className,
	type,
	id,
	label,
	placeholder,
	isRequired,
	error,
}) => {
	const { onchange } = useForm()

	const doOnChange = (ev: ChangeEvent<HTMLInputElement>) => {
		onchange(id, ev.target.value)
	}

	return (
		<div className={className}>
			<label htmlFor={id}>
				<span id={id}>{label}</span>
				{isRequired && <span className="text-red-400">*</span>}
			</label>
			<input
				aria-labelledby={id}
				title={label}
				type={type}
				placeholder={placeholder}
				onChange={doOnChange}
			/>
			{error}
		</div>
	)
}

export default FormInput
