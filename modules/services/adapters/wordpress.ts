type Rendered = {
	rendered: string
}

export interface Category {}

export interface Post {
	id: number
	date: string
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
			avatar_urls: {
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
		}[]
	}
}

type SearchParams = {
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
			Object.entries({ ...params, ...WordpressAdapter.DEFAULT_PARAMS }).filter(
				([, value]) => value
			)
		)

		const searchParams = new URLSearchParams(sanitizedSearchParams)

		return `?${searchParams}`
	}

	async posts(params: SearchParams = {}): Promise<Post[]> {
		const posts = await fetch(
			[
				WordpressAdapter.API_BASE_URL,
				WordpressAdapter.ENDPOINTS.POSTS,
				WordpressAdapter.getSearchParams(params),
			].join('')
		).then((res) => res.json())

		return posts
	}

	async categories(): Promise<Category[]> {
		const categories = await fetch(
			[
				WordpressAdapter.API_BASE_URL,
				WordpressAdapter.ENDPOINTS.CATEGORIES,
			].join()
		).then((res) => res.json())

		return categories
	}
}

export default WordpressAdapter
