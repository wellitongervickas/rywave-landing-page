import type {
	Category,
	Post,
	SearchParams,
} from '@modules/services/adapters/wordpress'

interface Adapter {
	posts(params: SearchParams): Promise<{
		posts: Post[]
		totalPages: number
	}>
	categories(): Promise<{
		categories: Category[]
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

		return { posts: ServiceBlog.buildPosts(posts), totalPages }
	}

	static buildPosts(posts: Post[]): Blog.Posts {
		if (!posts || !posts.length) return []

		return posts.map((post) => {
			const featuredMedia = post._embedded['wp:featuredmedia'] || []
			const featuredMediaMain = featuredMedia?.[0]

			const categories = post._embedded['wp:term']?.[0] || []
			const authors = post._embedded.author || []

			return {
				id: post.id,
				slug: post.slug,
				date: post.date,
				title: post.title.rendered,
				description: post.excerpt.rendered,
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

	async categories(): Promise<{ categories: Blog.Categories }> {
		const { categories } = await this.#adater.categories()

		return {
			categories: categories.filter(Boolean).map((category) => ({
				id: category.id,
				name: category.name,
				slug: category.slug,
			})),
		}
	}
}

export default ServiceBlog
