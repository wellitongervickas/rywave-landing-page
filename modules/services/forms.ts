interface FormAdapter {
	byId(id: string): Promise<Form.Content | undefined>
}

interface Adapter {
	forms: FormAdapter
}

class FormsAdapter {
	#adater: Adapter

	constructor(adapter: Adapter) {
		this.#adater = adapter
	}

	async formById(formId: string) {
		return await this.#adater.forms.byId(formId)
	}
}

export default FormsAdapter
