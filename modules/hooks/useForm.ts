import { createState, useState } from '@hookstate/core'

export type DefaultState = {
	[key: string]: string | number
}

export const DEFAULT_STATE = {} as DefaultState

const store = createState(DEFAULT_STATE)

function useForm() {
	const state = useState<DefaultState>(store)

	const onchange = (fieldId: string, value: any) => {
		state[fieldId].set(value)
	}

	const validateFields = (formFields: Form.Field[]) => {
		const requiredFields = formFields.filter((field) => field.isRequired)

		const requiredFieldsChecked = requiredFields.map((field) => {
			if (!state[field.id].value) {
				field.error = 'Field is required.'
			} else {
				field.error = ''
			}

			return field
		})

		const isValid = !requiredFieldsChecked.some((field) => field.error)

		return isValid
	}

	return {
		onchange,
		validateFields,
		state,
	}
}

export default useForm
