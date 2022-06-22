import WordpressAdapter from '@modules/services/adapters/wordpress'
import ServiceBlog from '@modules/services/blog'
import ServiceNewsletter from '@modules/services/newsletter'
import ServicePosts from '@modules/services/posts'

const wordpressAdapter = new WordpressAdapter()

export const services = {
	blog: new ServiceBlog(wordpressAdapter),
	newsletter: new ServiceNewsletter(wordpressAdapter),
	posts: new ServicePosts(wordpressAdapter),
}

export default services
