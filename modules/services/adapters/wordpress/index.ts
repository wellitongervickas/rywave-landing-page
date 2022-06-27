import BlogAdapter from '@modules/services/adapters/wordpress/blog'
import NewsletterAdapter from '@modules/services/adapters/wordpress/newsletter'
import PostsAdapter from '@modules/services/adapters/wordpress/posts'
import FormsAdapter from '@modules/services/adapters/wordpress/forms'

import wordpressUtils from '@modules/services/utils/wordpress'

class WordpressAdapter {
	blog: BlogAdapter
	newsletter: NewsletterAdapter
	posts: PostsAdapter
	forms: FormsAdapter

	constructor() {
		this.blog = new BlogAdapter()
		this.newsletter = new NewsletterAdapter()
		this.posts = new PostsAdapter()
		this.forms = new FormsAdapter()
	}

	static API_BASE_URL = process.env.WORDPRESS_API_BASE_URL

	static ENDPOINTS = {
		POSTS: 'wp/v2/posts',
		CATEGORIES: 'wp/v2/categories',
		TEAM: 'wp/v2/team',
		NEWSLETTER: 'newsletter/v2/subscriptions',
		FORMS: 'gf/v2/forms',
	}

	static DEFAULT_PARAMS = {
		_embed: 'true',
	}

	static get Utils() {
		return wordpressUtils
	}
}

export default WordpressAdapter
