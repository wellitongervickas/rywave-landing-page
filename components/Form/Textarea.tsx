import type { FC, ChangeEvent } from 'react'
import useForm from '@modules/hooks/useForm'

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
	const { onchange } = useForm()

	const doOnChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
		onchange(id, ev.target.value)
	}

	return (
		<div className={className}>
			<label htmlFor={id}>
				<span id={id}>{label}</span>
				{isRequired && <span className="text-red-400">*</span>}
			</label>

			<textarea
				aria-labelledby={id}
				title={label}
				placeholder={placeholder}
				onChange={doOnChange}
			/>
		</div>
	)
}

export default FormTextarea
