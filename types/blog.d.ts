declare namespace Blog {
	interface Article {
		id: number
		date: string
		title: string
		description?: string
		author: Author
		category: Category
		image: Image
	}

	type Articles = Article[]

	type Author = {
		id: number
		name: string
		description?: string
		slug: string
		avatar: string
	}

	type Category = {
		slug: string
		taxonomy: string
		name: string
		id: number
	}

	type Categories = Blog.Category[]

	type Image = {
		id: number
		title: string
		sizes: {
			medium: ImageSize
			large: ImageSize
			thumbnail: ImageSize
			medium_large: ImageSize
			full: ImageSize
		}
	}

	type ImageSize = {
		file: string
		width: string
		height: string
		url: string
	}
}
