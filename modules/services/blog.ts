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

	async posts(params: SearchParams) {
		return await this.#adater.posts(params)
	}

	async categories() {
		return await this.#adater.categories()
	}
}

export default ServiceBlog
