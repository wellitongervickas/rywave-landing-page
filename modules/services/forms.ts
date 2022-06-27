interface Adapter {
	forms: {
		byId(id: string): Promise<Form.Content | null>
	}
}

class FormsService {
	#adater: Adapter

	constructor(adapter: Adapter) {
		this.#adater = adapter
	}

	async byId(formId: string) {
		return await this.#adater.forms.byId(formId)
	}
}

export default FormsService
