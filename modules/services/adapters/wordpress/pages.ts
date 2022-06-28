import type { Rendered } from '@modules/services/utils/wordpress'

import WordpressAdapter from '@modules/services/adapters/wordpress'

interface IPage {
	title: Rendered
	excerpt: Rendered
	acf: any
	content: Rendered
}

class PagesAdapter {
	async bySlug(slug: string): Promise<Page.Content | null> {
		const page = (await fetch(
			[
				WordpressAdapter.API_BASE_URL,
				WordpressAdapter.ENDPOINTS.PAGES,
				WordpressAdapter.Utils.getSearchParams({
					slug,
				}),
			].join('')
		).then((res) => res.json())) as IPage[]

		const data = page[0]

		if (!data) return null

		return {
			title: data.title.rendered,
			description: data.excerpt.rendered,
			acf: data.acf,
			content: data.content,
		}
	}
}

export default PagesAdapter
