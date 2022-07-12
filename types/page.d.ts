declare namespace Page {
	interface Content {
		title: string
		description: string
		acf: any
		content?: {
			rendered?: string
		}
	}

	type HowToEnterItem = {
		text: string
		button: {
			label: string
			url: string
		}
	}

	type Prize = {
		title: string
		image?: Blog.Image
		description?: string
	}

	type PartnersSponsors = {
		title: string
		image: Blog.Image
	}

	interface RemixCompetition {
		title: string
		subHeading: string
		announcing: string
		prizes: Prize[]
		secondPrizes: Prize[]
		lastPrizes: Prize[]
		terms: {
			title: string
			text: string
		}
		partnersSponsors: PartnersSponsors[]
		video: {
			title: string
			buttoLabel: string
			file: {
				url: string
			}
		}
		howToEnter: {
			download: HowToEnterItem
			upload: HowToEnterItem
			submission: HowToEnterItem
		}
		additionalInformation: {
			title: string
			text: string
		}
		deadline: {
			title: string
			text: string
		}
	}
}
