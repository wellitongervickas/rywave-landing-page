interface PostsAdapter {
	team(): Promise<{
		team: Team.Member[]
	}>
}

interface Adapter {
	posts: PostsAdapter
}

class PostAdapter {
	#adater: Adapter

	constructor(adapter: Adapter) {
		this.#adater = adapter
	}

	async team() {
		return await this.#adater.posts.team()
	}
}

export default PostAdapter
