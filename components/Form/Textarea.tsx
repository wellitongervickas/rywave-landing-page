import type { FC, ChangeEvent } from 'react'
import useForm from '@modules/hooks/useForm'
import classnames from '@modules/handlers/classnames'

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
	error,
}) => {
	const { onchange } = useForm()

	const doOnChange = (ev: ChangeEvent<HTMLTextAreaElement>) => {
		onchange(id, ev.target.value)
	}

	return (
		<div className="flex flex-col space-y-1">
			<label htmlFor={id}>
				<span id={id}>{label}</span>
				{isRequired && <span className="text-red-400">*</span>}
			</label>

			<textarea
				aria-labelledby={id}
				title={label}
				placeholder={placeholder}
				onChange={doOnChange}
				rows={6}
				className={classnames.merge([
					'w-full bg-offwhite py-4 px-6 shadow-inner outline-none',
				])}
			/>
			{error && <span className="text-red-400">{error}</span>}
		</div>
	)
}

export default FormTextarea
