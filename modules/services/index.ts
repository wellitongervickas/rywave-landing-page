import WordpressAdapter from '@modules/services/adapters/wordpress'
import ServiceBlog from '@modules/services/blog'
import ServiceNewsletter from '@modules/services/newsletter'

const wordpressAdapter = new WordpressAdapter()

export const services = {
	blog: new ServiceBlog(wordpressAdapter),
	newsletter: new ServiceNewsletter(wordpressAdapter),
}

export default services
