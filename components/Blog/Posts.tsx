import type { FC } from 'react'
import BlogPost from '@components/Blog/Post'

interface BlogPosts {
	posts: Blog.Posts
}

const BlogPosts: FC<BlogPosts> = ({ posts }) => (
	<div className="flex space-x-2">
		{posts.length ? (
			posts.map((post) => <BlogPost key={post.id} post={post} />)
		) : (
			<div>No posts found</div>
		)}
	</div>
)

export default BlogPosts
