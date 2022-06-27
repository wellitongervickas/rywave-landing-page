interface PostsSearchParams {
	page?: undefined | string | string[] | 1
	categories?: undefined | string | string[]
	slug?: string
}
interface BlogAdapter {
	posts(params: PostsSearchParams): Promise<{
		posts: Blog.Post[]
		totalPages: number
	}>
	categories(): Promise<{
		categories: Blog.Category[]
	}>
}

interface Adapter {
	blog: BlogAdapter
}

class ServiceBlog {
	#adater: Adapter

	constructor(adapter: Adapter) {
		this.#adater = adapter
	}

	async posts(params: PostsSearchParams) {
		return await this.#adater.blog.posts(params)
	}

	async categories() {
		return await this.#adater.blog.categories()
	}
}

export default ServiceBlog
