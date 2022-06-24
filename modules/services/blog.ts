import type { SearchParams } from '@modules/services/utils/wordpress'

interface Adapter {
	blogPosts(params: SearchParams): Promise<{
		posts: Blog.Post[]
		totalPages: number
	}>
	blogCategories(): Promise<{
		categories: Blog.Category[]
	}>
}

class ServiceBlog {
	#adater: Adapter

	constructor(adapter: Adapter) {
		this.#adater = adapter
	}

	async posts(params: SearchParams) {
		return await this.#adater.blogPosts(params)
	}

	async categories() {
		return await this.#adater.blogCategories()
	}
}

export default ServiceBlog
