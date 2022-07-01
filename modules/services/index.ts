import HttpAdapter from '@modules/services/adapters/http'
import WordpressAdapter from '@modules/services/adapters/wordpress'
import BlogService from '@modules/services/blog'
import NewsletterService from '@modules/services/newsletter'
import PostsService from '@modules/services/posts'
import FormService from '@modules/services/forms'
import PagesService from '@modules/services/pages'

const wordpressAdapter = new WordpressAdapter()
const httpAdapter = new HttpAdapter()

export const services = {
	blog: new BlogService(wordpressAdapter),
	newsletter: new NewsletterService(wordpressAdapter),
	posts: new PostsService(wordpressAdapter),
	forms: new FormService(httpAdapter),
	pages: new PagesService(wordpressAdapter),
}

export default services
