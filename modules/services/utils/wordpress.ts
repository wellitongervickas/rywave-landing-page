export type Rendered = {
	rendered: string
}

export interface Category {
	id: number
	slug: string
	name: string
}

export interface Post {
	id: number
	date: Date
	slug: string
	title: Rendered
	excerpt: Rendered
	content: Rendered
	_embedded: {
		author: {
			id: number
			name: string
			description: string
			slug: string
			avatar_urls?: {
				[key: string]: string
			}
		}[]
		'wp:featuredmedia': {
			id: number
			title: Rendered
			media_details: {
				sizes: {
					[key: string]: {
						width: number
						height: number
						source_url: string
					}
				}
			}
		}[]
		'wp:term': {
			slug: string
			taxonomy: string
			name: string
			id: number
		}[][]
	}
}

type ACFImage = {
	sizes: {
		[key: string]: string | number
	}
}

type ACFSocial = {
	type: string
	link: string
}

export interface Member {
	id: number
	title: Rendered
	acf: {
		name: string
		position: string
		image?: ACFImage
		social?: ACFSocial[]
	}
}

const buildPosts = (posts: Post[]): Blog.Posts => {
	if (!posts?.length) return []

	return posts.map((post) => {
		const featuredMedia =
			post._embedded['wp:featuredmedia']?.filter(Boolean) || []
		const featuredMediaMain = featuredMedia?.filter(Boolean)?.[0]
		const categories = post._embedded['wp:term']?.filter(Boolean)?.[0] || []
		const authors = post._embedded?.author?.filter(Boolean) || []

		return {
			id: post.id,
			slug: post.slug,
			date: post.date,
			title: post.title.rendered,
			description: post.excerpt?.rendered || '',
			authors: authors.map(({ id, name, description, slug, avatar_urls }) => ({
				id,
				name,
				description,
				slug,
				avatar: avatar_urls?.[48],
			})),
			categories: categories.map(({ slug, taxonomy, name, id }) => ({
				slug,
				taxonomy,
				name,
				id,
			})),
			image: featuredMediaMain
				? {
						id: featuredMediaMain.id,
						title: featuredMediaMain.title.rendered,
						sizes: {
							full: {
								...featuredMediaMain.media_details?.sizes.full,
								url: featuredMediaMain.media_details?.sizes.full.source_url,
							},
						},
				  }
				: null,
			content: post.content.rendered,
		} as any
	})
}

const buildCategories = (categories: Category[]): Blog.Categories => {
	if (!categories?.length) return []

	return categories.filter(Boolean).map((category) => ({
		id: category.id,
		name: category.name,
		slug: category.slug,
	}))
}

const buildTeam = (teams: Member[]): Team.Member[] => {
	if (!teams?.length) return []

	console.log(teams[2].acf?.image)

	return teams.map((member) => ({
		id: member.id,
		name: member.title.rendered,
		position: member.acf.position,
		social: member.acf.social || [],
		image: {
			sizes: {
				medium: member.acf.image?.sizes.medium as string,
				large: member.acf.image?.sizes.large as string,
			},
		},
	}))
}

const wordpress = {
	buildTeam,
	buildPosts,
	buildCategories,
}

export default wordpress
