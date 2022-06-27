interface Adapter {
	newsletter: {
		subscribe(email: string): Promise<Error | boolean>
	}
}

class NewsletterService {
	#adater: Adapter

	constructor(adapter: Adapter) {
		this.#adater = adapter
	}

	async subscribe(email: string) {
		return await this.#adater.newsletter.subscribe(email)
	}
}

export default NewsletterService
