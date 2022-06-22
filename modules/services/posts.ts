interface Adapter {
	team(): Promise<{
		team: Team.Member[]
	}>
}

class PostAdapter {
	#adater: Adapter

	constructor(adapter: Adapter) {
		this.#adater = adapter
	}

	async team() {
		return await this.#adater.team()
	}
}

export default PostAdapter
