import HttpAdapter from '@modules/services/adapters/http'
import WpFormsAdapter from '@modules/services/adapters/wordpress/forms'

class FormsAdapter extends WpFormsAdapter {
	async submit(id: string, data: any) {
		const { token, fields } = data

		const result = await fetch(
			[HttpAdapter.API_BASE_URL, HttpAdapter.ENDPOINTS.FORMS, `/${id}/`].join(
				''
			),
			{
				headers: {
					'x-recaptcha': token,
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: JSON.stringify(fields),
			}
		).then((res) => res.json())

		return (result?.success || false) as boolean

		return false
	}
}

export default FormsAdapter
