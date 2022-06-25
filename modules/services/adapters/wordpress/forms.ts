/**
 * @docs https://docs.gravityforms.com/rest-api-v2
 * @docs https://docs.gravityforms.com/rest-api-v2-authentication
 */

import WordpressAdapter from '@modules/services/adapters/wordpress'

interface Form {
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

		if (!result?.data) {
			return null
		}

		const { title, description, fields, button } = result as Form

		return {
			title,
			description,
			button,
			fields: fields.map((field) => ({
				id: field.id,
				type: field.type,
				label: field.label,
				isRequired: field.isRequired,
				placeholder: field.placeholder,
				choices: field.choices,
			})),
		}
	}
}

export default FormsAdapter
