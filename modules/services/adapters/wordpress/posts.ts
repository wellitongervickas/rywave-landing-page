import WordpressAdapter from '@modules/services/adapters/wordpress'

class PostsAdapter {
	async team(): Promise<{
		team: Team.Member[]
	}> {
		try {
			const team = await fetch(
				[
					WordpressAdapter.API_BASE_URL,
					WordpressAdapter.ENDPOINTS.TEAM,
					WordpressAdapter.Utils.getSearchParams({
						per_page: 100,
					}),
				].join('')
			).then((res) => res.json())

			return {
				team: WordpressAdapter.Utils.buildTeam(team),
			}
		} catch (error) {
			return { team: [] }
		}
	}
}

export default PostsAdapter
