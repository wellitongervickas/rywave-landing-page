import wordpressUtils from '@modules/services/utils/wordpress'

export type SearchParams = {
	[key: string]: any
}

class WordpressAdapter {
	static API_BASE_URL = process.env.WORDPRESS_API_BASE_URL

	static ENDPOINTS = {
		POSTS: 'wp/v2/posts',
		CATEGORIES: 'wp/v2/categories',
		TEAM: 'wp/v2/team',
		NEWSLETTER: 'newsletter/v2/subscriptions',
	}

	static DEFAULT_PARAMS = {
		_embed: 'true',
	}

	static getSearchParams(params: SearchParams = {}) {
		const sanitizedSearchParams = Object.fromEntries(
			Object.entries(params).filter(([, value]) => value)
		)

		const searchParams = new URLSearchParams(sanitizedSearchParams)

		return `?${searchParams}`
	}

	async posts(params: SearchParams = {}): Promise<{
		posts: Blog.Post[]
		totalPages: number
	}> {
		try {
			const result = await fetch(
				[
					WordpressAdapter.API_BASE_URL,
					WordpressAdapter.ENDPOINTS.POSTS,
					WordpressAdapter.getSearchParams({
						...params,
						...WordpressAdapter.DEFAULT_PARAMS,
					}),
				].join('')
			).then(async (res) => {
				const posts = await res.json()

				return {
					posts: wordpressUtils.buildPosts(posts),
					totalPages: +(res.headers.get('X-WP-TotalPages') || '1'),
				}
			})

			return result
		} catch (error) {
			return {
				posts: [],
				totalPages: 0,
			}
		}
	}

	async categories(): Promise<{
		categories: Blog.Category[]
	}> {
		try {
			const categories = await fetch(
				[
					WordpressAdapter.API_BASE_URL,
					WordpressAdapter.ENDPOINTS.CATEGORIES,
					WordpressAdapter.getSearchParams(WordpressAdapter.DEFAULT_PARAMS),
				].join('')
			).then((res) => res.json())

			return {
				categories: wordpressUtils.buildCategories(categories),
			}
		} catch (error) {
			return { categories: [] }
		}
	}

	async team(): Promise<{
		team: Team.Member[]
	}> {
		try {
			const team = await fetch(
				[
					WordpressAdapter.API_BASE_URL,
					WordpressAdapter.ENDPOINTS.TEAM,
					WordpressAdapter.getSearchParams({
						per_page: 1000,
					}),
				].join('')
			).then((res) => res.json())

			return {
				team: wordpressUtils.buildTeam(team),
			}
		} catch (error) {
			return { team: [] }
		}
	}

	/**
	 * @docs https://www.thenewsletterplugin.com/documentation/api-reference/#/subscriptions/post_subscriptions
	 */
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

export default WordpressAdapter
