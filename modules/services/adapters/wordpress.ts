type Rendered = {
	rendered: string
}

export interface Category {
	id: number
	slug: string
	name: Rendered
}

export interface Post {
	id: number
	date: Date
	slug: string
	title: Rendered
	excerpt: Rendered
	content: Rendered
	_embedded: {
		author: {
			id: number
			name: string
			description: string
			slug: string
			avatar_urls?: {
				[key: string]: string
			}
		}[]
		'wp:featuredmedia': {
			id: number
			title: Rendered
			media_details: {
				sizes: {
					[key: string]: {
						width: number
						height: number
						source_url: string
					}
				}
			}
		}[]
		'wp:term': {
			slug: string
			taxonomy: string
			name: string
			id: number
		}[][]
	}
}

export type SearchParams = {
	[key: string]: any
}

class WordpressAdapter {
	static API_BASE_URL = process.env.WORDPRESS_API_BASE_URL

	static ENDPOINTS = {
		POSTS: 'posts',
		CATEGORIES: 'categories',
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
		posts: Post[]
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
			).then(async (res) => ({
				posts: await res.json(),
				totalPages: +(res.headers.get('X-WP-TotalPages') || '1'),
			}))

			return result
		} catch (_) {
			return {
				posts: [],
				totalPages: 0,
			}
		}
	}

	async categories(): Promise<Category[]> {
		try {
			const categories = await fetch(
				[
					WordpressAdapter.API_BASE_URL,
					WordpressAdapter.ENDPOINTS.CATEGORIES,
				].join()
			).then((res) => res.json())

			return categories
		} catch (_) {
			return []
		}
	}
}

export default WordpressAdapter
