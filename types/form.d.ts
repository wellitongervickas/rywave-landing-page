declare namespace Form {
	interface Content {
		title: string
		description: string
		button: Form.Button
		fields: Form.Field[]
	}

	type Button = {
		text: string
		type: string
	}

	interface Field {
		id: string
		type: string
		label: string
		placeholder?: string
		isRequired: boolean
		choices?: Form.Choice[]
		error?: string
	}

	type Choice = {
		text: string
		value: any
	}
}
