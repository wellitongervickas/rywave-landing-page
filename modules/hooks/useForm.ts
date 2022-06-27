import { createState, useState } from '@hookstate/core'
import { useForm as useReactHookForm } from 'react-hook-form'

export type DefaultState = {
	[key: string]: string | number
}

export const DEFAULT_STATE = {} as DefaultState

const store = createState(DEFAULT_STATE)

function useForm() {
	const state = useState<DefaultState>(store)

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useReactHookForm()

	const onchange = (fieldId: string, value: any) => {
		state[fieldId].set(value)
	}

	return {
		onchange,
		state,
	}
}

export default useForm
