import BlogAdapter from '@modules/services/adapters/wordpress/blog'
import NewsletterAdapter from '@modules/services/adapters/wordpress/newsletter'

import PostsAdapter from '@modules/services/adapters/wordpress/posts'

import type { SearchParams } from '@modules/services/utils/wordpress'

import wordpressUtils from '@modules/services/utils/wordpress'

class WordpressAdapter {
	blog: BlogAdapter
	newsletter: NewsletterAdapter
	posts: PostsAdapter

	constructor() {
		this.blog = new BlogAdapter()
		this.newsletter = new NewsletterAdapter()
		this.posts = new PostsAdapter()
	}

	static API_BASE_URL = process.env.WORDPRESS_API_BASE_URL

	static ENDPOINTS = {
		POSTS: 'wp/v2/posts',
		CATEGORIES: 'wp/v2/categories',
		TEAM: 'wp/v2/team',
		NEWSLETTER: 'newsletter/v2/subscriptions',
	}

	static DEFAULT_PARAMS = {
		_embed: 'true',
	}

	static get Utils() {
		return wordpressUtils
	}

	async blogPosts(params: SearchParams = {}) {
		return await this.blog.posts(params)
	}

	async blogCategories() {
		return await this.blog.categories()
	}

	async postsTeam() {
		return await this.posts.team()
	}

	async newsletterSubscribe(email: string) {
		return await this.newsletter.subscribe(email)
	}
}

export default WordpressAdapter
