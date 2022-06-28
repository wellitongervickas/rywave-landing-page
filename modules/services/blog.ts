interface PostsSearchParams {
	page?: undefined | string | string[] | 1
	categories?: undefined | string | string[]
	slug?: string
}
interface Adapter {
	blog: {
		posts(params: PostsSearchParams): Promise<{
			posts: Blog.Post[]
			totalPages: number
		}>
		categories(): Promise<{
			categories: Blog.Category[]
		}>
	}
}

class BlogServices {
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

export default BlogServices
