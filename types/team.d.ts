declare namespace Team {
	interface Member {
		id: number
		name: string
		position: string
		image: Team.Image
		social: Team.Social[]
	}

	type Image = {
		sizes: {
			medium: string
			large: string
		}
	}

	type Social = {
		link: string
		type: string
	}
}
