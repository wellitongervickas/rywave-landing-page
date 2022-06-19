import WordpressAdapter from '@modules/services/adapters/wordpress'
import ServiceBlog from '@modules/services/blog'

const blogAdapter = new WordpressAdapter()

export const services = {
	blog: new ServiceBlog(blogAdapter),
}

export default services
