import WordpressAdapter from '@modules/services/adapters/wordpress'
import BlogService from '@modules/services/blog'
import NewsletterService from '@modules/services/newsletter'
import PostsService from '@modules/services/posts'
import FormService from '@modules/services/forms'
import PagesService from '@modules/services/pages'

const wordpressAdapter = new WordpressAdapter()

export const services = {
	blog: new BlogService(wordpressAdapter),
	newsletter: new NewsletterService(wordpressAdapter),
	posts: new PostsService(wordpressAdapter),
	forms: new FormService(wordpressAdapter),
	pages: new PagesService(wordpressAdapter),
}

export default services
