interface Adapter {
	subscribe(email: string): Promise<Error | boolean>
}

class ServiceNewsletter {
	#adater: Adapter

	constructor(adapter: Adapter) {
		this.#adater = adapter
	}

	async subscribe(email: string) {
		return await this.#adater.subscribe(email)
	}
}

export default ServiceNewsletter
