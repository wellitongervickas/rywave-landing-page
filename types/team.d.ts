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
			[key: string]: string
		}
	}

	type Social = {
		link: string
		type: string
	}
}
