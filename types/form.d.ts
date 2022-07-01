declare namespace Form {
	interface Content {
		id: string
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
	}

	type Choice = {
		text: string
		value: any
	}
}
