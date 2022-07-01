import FormsAdapter from '@modules/services/adapters/http/forms'

class WordpressAdapter {
	forms: FormsAdapter

	constructor() {
		this.forms = new FormsAdapter()
	}

	static API_BASE_URL = '/api/' // same context

	static ENDPOINTS = {
		FORMS: 'forms',
	}
}

export default WordpressAdapter
