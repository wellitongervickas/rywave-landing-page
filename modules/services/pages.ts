interface Adapter {
	pages: {
		bySlug(slug: string): Promise<Page.Content | null>
	}
}

class PagesService {
	#adater: Adapter

	constructor(adapter: Adapter) {
		this.#adater = adapter
	}

	async bySlug(slug: string) {
		return await this.#adater.pages.bySlug(slug)
	}
}

export default PagesService
