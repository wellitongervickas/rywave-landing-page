declare namespace Blog {
	interface Post {
		id: number
		date: string
		slug: string
		title: string
		description?: string
		authors: Authors
		categories: Categories
		image?: Image
		content: string
	}

	type Posts = Post[]

	type Author = {
		id: number
		name: string
		description?: string
		slug: string
		avatar: string
	}

	type Authors = Author[]

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
			[key: string]: ImageSize
		}
	}

	type ImageSize = {
		width: number
		height: number
		url: string
	}
}
