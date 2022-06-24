interface Adapter {
	postsTeam(): Promise<{
		team: Team.Member[]
	}>
}

class PostAdapter {
	#adater: Adapter

	constructor(adapter: Adapter) {
		this.#adater = adapter
	}

	async team() {
		return await this.#adater.postsTeam()
	}
}

export default PostAdapter
