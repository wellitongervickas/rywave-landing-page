interface Adapter {
	newsletterSubscribe(email: string): Promise<Error | boolean>
}

class ServiceNewsletter {
	#adater: Adapter

	constructor(adapter: Adapter) {
		this.#adater = adapter
	}

	async subscribe(email: string) {
		return await this.#adater.newsletterSubscribe(email)
	}
}

export default ServiceNewsletter
