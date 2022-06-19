import type { Category, Post } from '@modules/services/adapters/wordpress'

interface Adapter {
	posts(): Promise<Post[]>
	categories(): Promise<Category[]>
}

class ServiceBlog {
	#adater: Adapter

	constructor(adapter: Adapter) {
		this.#adater = adapter
	}

	async posts(): Promise<{ posts: Blog.Posts }> {
		const posts = await this.#adater.posts()

		return Promise.resolve({ posts: ServiceBlog.buildPosts(posts) })
	}

	static buildPosts(posts: Post[]): Blog.Posts {
		return posts.map((post) => {
			// const featuredMedia = post._embedded['wp:featuredmedia'] || []
			// const featuredMediaMain = featuredMedia?.[0]

			// const categories = post._embedded['wp:term'] || []
			// const authors = post._embedded.author || []

			return {
				id: post.id,
				slug: post.slug,
				date: post.date,
				title: post.title.rendered,
				description: post.excerpt.rendered,
				// authors: authors.map(
				// 	({ id, name, description, slug, avatar_urls }) => ({
				// 		id,
				// 		name,
				// 		description,
				// 		slug,
				// 		avatar: avatar_urls[48],
				// 	})
				// ),
				// categories: categories.map(({ slug, taxonomy, name, id }) => ({
				// 	slug,
				// 	taxonomy,
				// 	name,
				// 	id,
				// })),
				// image: featuredMediaMain
				// 	? {
				// 			id: featuredMediaMain.id,
				// 			title: featuredMediaMain.title.rendered,
				// 			sizes: {
				// 				medium: {
				// 					...featuredMediaMain.media_details.sizes.medium,
				// 					url: featuredMediaMain.media_details.sizes.medium.source_url,
				// 				},
				// 				large: {
				// 					...featuredMediaMain.media_details.sizes.large,
				// 					url: featuredMediaMain.media_details.sizes.large.source_url,
				// 				},
				// 				medium_large: {
				// 					...featuredMediaMain.media_details.sizes.medium,
				// 					url: featuredMediaMain.media_details.sizes.medium.source_url,
				// 				},
				// 				full: {
				// 					...featuredMediaMain.media_details.sizes.medium,
				// 					url: featuredMediaMain.media_details.sizes.medium.source_url,
				// 				},
				// 			},
				// 	  }
				// 	: undefined,
				// content: post.content.rendered,
			} as any
		})
	}

	async categories(): Promise<{ categories: Blog.Categories }> {
		return Promise.resolve({ categories: [] })
	}
}

export default ServiceBlog
