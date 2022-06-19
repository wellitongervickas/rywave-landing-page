type Rendered = {
	rendered: string
}

export interface Category {
	id: number
	slug: string
	name: string
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
	static API_BASE_URL = 'https://hi.rywave.io/hi/wp-json/wp/v2/'

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

	async posts(params: SearchParams = {}) {
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
					posts: WordpressAdapter.buildPosts(posts),
					totalPages: +(res.headers.get('X-WP-TotalPages') || '1'),
				}
			})

			return result
		} catch (error) {
			console.error('WP Adapter Error:', error)
			return {
				posts: [],
				totalPages: 0,
			}
		}
	}

	static buildPosts(posts: Post[]) {
		if (!posts || !posts.length) return []

		return posts.map((post) => {
			const featuredMedia =
				post._embedded['wp:featuredmedia'].filter(Boolean) || []
			const featuredMediaMain = featuredMedia.filter(Boolean)?.[0]
			const categories = post._embedded['wp:term'].filter(Boolean)?.[0] || []
			const authors = post._embedded?.author.filter(Boolean) || []

			return {
				id: post.id,
				slug: post.slug,
				date: post.date,
				title: post.title.rendered,
				description: post.excerpt?.rendered || '',
				authors: authors.map(
					({ id, name, description, slug, avatar_urls }) => ({
						id,
						name,
						description,
						slug,
						avatar: avatar_urls?.[48],
					})
				),
				categories: categories.map(({ slug, taxonomy, name, id }) => ({
					slug,
					taxonomy,
					name,
					id,
				})),
				image: featuredMediaMain
					? {
							id: featuredMediaMain.id,
							title: featuredMediaMain.title.rendered,
							sizes: {
								full: {
									...featuredMediaMain.media_details?.sizes.full,
									url: featuredMediaMain.media_details?.sizes.full.source_url,
								},
							},
					  }
					: null,
				content: post.content.rendered,
			} as any
		})
	}

	async categories() {
		try {
			const categories = (await fetch(
				[
					WordpressAdapter.API_BASE_URL,
					WordpressAdapter.ENDPOINTS.CATEGORIES,
					WordpressAdapter.getSearchParams(WordpressAdapter.DEFAULT_PARAMS),
				].join('')
			).then((res) => res.json())) as Category[]

			return {
				categories: categories.filter(Boolean).map((category) => ({
					id: category.id,
					name: category.name,
					slug: category.slug,
				})),
			}
		} catch (error) {
			console.error('WP Adapter Error:', error)
			return { categories: [] }
		}
	}
}

export default WordpressAdapter
