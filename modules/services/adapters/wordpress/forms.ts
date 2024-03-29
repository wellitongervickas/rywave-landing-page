/**
 * @docs https://docs.gravityforms.com/rest-api-v2
 * @docs https://docs.gravityforms.com/rest-api-v2-authenticationv
 * @docs https://docs.gravityforms.com/rest-api-v2/#post-forms-form-id-submissions
 */

import WordpressAdapter from '@modules/services/adapters/wordpress'

interface Form {
	id: string
	title: string
	description: string
	button: {
		type: string
		text: string
	}
	fields: {
		id: string
		type: string
		label: string
		isRequired: boolean
		placeholder?: string
		choices?: {
			text: string
			value: any
		}[]
	}[]
}

class FormsAdapter {
	async submit(id: string, data: any) {
		const body = Object.keys(data).reduce((values, key) => {
			values = {
				...values,
				[`input_${key}`]: data[key],
			}
			return values
		}, {})

		try {
			const result = await fetch(
				[
					WordpressAdapter.API_BASE_URL,
					WordpressAdapter.ENDPOINTS.FORMS,
					`/${id}`,
					'/submissions',
				].join(''),
				{
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'POST',
					body: JSON.stringify(body),
				}
			).then((res) => res.json())

			return result?.is_valid || false
		} catch (error) {
			return false
		}
	}

	async byId(id: string): Promise<null | Form.Content> {
		const result = await fetch(
			[
				WordpressAdapter.API_BASE_URL,
				WordpressAdapter.ENDPOINTS.FORMS,
				`/${id}/`,
			].join(''),
			{
				headers: {
					Authorization: `Basic ${process.env.WORDPRESS_API_FORM_SECRET_TOKEN}`,
				},
			}
		).then((res) => res.json())

		if (result?.code) {
			return null
		}

		const { id: formId, title, description, fields, button } = result as Form

		return {
			id: formId,
			title,
			description,
			button: {
				text: button.text,
				type: button.type,
			},
			fields: !fields.length
				? []
				: fields.map((field) => ({
						id: field.id,
						type: field.type,
						label: field.label,
						isRequired: field.isRequired,
						placeholder: field.placeholder,
						choices: field.choices || [],
				  })),
		}
	}
}

export default FormsAdapter
