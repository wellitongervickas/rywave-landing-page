type FormData = {
	[key: string]: any
}

interface Adapter {
	forms: {
		byId(id: string): Promise<Form.Content | null>
		submit(id: string, data: FormData): Promise<boolean>
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

	async submit(id: string, data: FormData) {
		return await this.#adater.forms.submit(id, data)
	}
}

export default FormsService
