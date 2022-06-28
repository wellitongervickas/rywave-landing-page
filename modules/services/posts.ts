interface Adapter {
	posts: {
		team(): Promise<{
			team: Team.Member[]
		}>
	}
}

class PostsService {
	#adater: Adapter

	constructor(adapter: Adapter) {
		this.#adater = adapter
	}

	async team() {
		return await this.#adater.posts.team()
	}
}

export default PostsService
