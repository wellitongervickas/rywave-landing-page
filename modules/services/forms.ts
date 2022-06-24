interface Adapter {
	formById(id: string): Promise<Form.Content>
}

class FormsAdapter {
	#adater: Adapter

	constructor(adapter: Adapter) {
		this.#adater = adapter
	}

	async formById(formId: string) {
		return await this.#adater.formById(formId)
	}
}

export default FormsAdapter
