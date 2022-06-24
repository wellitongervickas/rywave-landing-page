interface NewsletterAdapter {
	subscribe(email: string): Promise<Error | boolean>
}

interface Adapter {
	newsletter: NewsletterAdapter
}

class ServiceNewsletter {
	#adater: Adapter

	constructor(adapter: Adapter) {
		this.#adater = adapter
	}

	async subscribe(email: string) {
		return await this.#adater.newsletter.subscribe(email)
	}
}

export default ServiceNewsletter
