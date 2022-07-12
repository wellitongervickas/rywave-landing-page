declare namespace Page {
	interface Content {
		title: string
		description: string
		acf: any
		content?: {
			rendered?: string
		}
	}
}
