import type { SearchParams } from '@modules/services/adapters/wordpress'

interface Adapter {
	posts(params: SearchParams): Promise<{
		posts: Blog.Post[]
		totalPages: number
	}>
	categories(): Promise<{
		categories: Blog.Category[]
	}>
}

class ServiceBlog {
	#adater: Adapter

	constructor(adapter: Adapter) {
		this.#adater = adapter
	}

	async posts(
		params: SearchParams
	): Promise<{ posts: Blog.Posts; totalPages: number }> {
		const { posts, totalPages } = await this.#adater.posts(params)

		return { posts, totalPages }
	}

	async categories(): Promise<{ categories: Blog.Categories }> {
		const { categories } = await this.#adater.categories()

		return {
			categories,
		}
	}
}

export default ServiceBlog
