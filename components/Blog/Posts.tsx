import type { FC } from 'react'
import BlogPost from '@components/Blog/Post'

interface BlogPosts {
	posts: Blog.Posts
}

const BlogPosts: FC<BlogPosts> = ({ posts }) => {
	const featured = posts.slice(0)[0]

	const lastestPosts = posts.slice(1, 2)

	const restPosts = posts.slice(2)

	return (
		<div className="grid gap-6 lg:grid-cols-2">
			<BlogPost post={featured} className="col-span-2" featured />
			{lastestPosts.length > 0 &&
				lastestPosts.map((post) => (
					<BlogPost
						className="col-span-2 lg:col-span-1"
						key={post.id}
						post={post}
					/>
				))}

			{restPosts.length > 0 &&
				restPosts.map((post) => (
					<BlogPost
						className="col-span-2 lg:col-span-1"
						key={post.id}
						post={post}
					/>
				))}
		</div>
	)
}

export default BlogPosts
