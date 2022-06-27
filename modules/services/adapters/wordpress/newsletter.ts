import WordpressAdapter from '@modules/services/adapters/wordpress'

/**
 * @docs https://www.thenewsletterplugin.com/documentation/api-reference/#/subscriptions/post_subscriptions
 */

class NewsletterAdapter {
	async subscribe(email: string) {
		const result = await fetch(
			[
				WordpressAdapter.API_BASE_URL,
				WordpressAdapter.ENDPOINTS.NEWSLETTER,
			].join(''),
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email,
				}),
			}
		).then((res) => {
			if (res.status >= 200 && res.status <= 299) {
				return true
			}

			return res.json()
		})

		if (result?.message) {
			return Promise.reject(new Error(result.message))
		}

		return Promise.resolve(true)
	}
}

export default NewsletterAdapter
