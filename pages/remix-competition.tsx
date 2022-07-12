import type { NextPage } from 'next'

import services from '@modules/services'

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

export async function getServerSideProps() {
	const page = await services.pages.bySlug('remix-competition')

	if (!page) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			title: page.title,
			description: page.description,
			...page.acf,
		} as RemixCompetition,
	}
}

const RemixCompetition: NextPage<RemixCompetition> = ({ title }) => {
	return (
		<div className="py-20 container">
			<h1 className="mb-12 font-astrospace text-3xl font-black md:text-5xl">
				{title}
			</h1>
		</div>
	)
}
export default RemixCompetition
