import type { SearchParams } from '@modules/services/utils/wordpress'

import WordpressAdapter from '@modules/services/adapters/wordpress'

class BlogAdapter {
	async posts(params: SearchParams = {}): Promise<{
		posts: Blog.Post[]
		totalPages: number
	}> {
		try {
			const result = await fetch(
				[
					WordpressAdapter.API_BASE_URL,
					WordpressAdapter.ENDPOINTS.POSTS,
					WordpressAdapter.Utils.getSearchParams({
						...params,
						...WordpressAdapter.DEFAULT_PARAMS,
					}),
				].join('')
			).then(async (res) => {
				const posts = await res.json()

				return {
					posts: WordpressAdapter.Utils.buildPosts(posts),
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
					WordpressAdapter.Utils.getSearchParams(
						WordpressAdapter.DEFAULT_PARAMS
					),
				].join('')
			).then((res) => res.json())

			return {
				categories: WordpressAdapter.Utils.buildCategories(categories),
			}
		} catch (error) {
			return { categories: [] }
		}
	}
}

export default BlogAdapter
