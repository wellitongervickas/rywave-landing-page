import type { FC } from 'react'

import BlogPost from '@components/Blog/Post'

interface BlogPosts {
	posts: Blog.Posts
}

const BlogPosts: FC<BlogPosts> = ({ posts }) => {
	if (!posts.length)
		return (
			<div className="py-24 text-center text-gray-stroke">No posts found!</div>
		)

	const featured = posts.at(0)
	const lastestPosts = posts.slice(1, 3)
	const reminderPost = posts.at(3)
	const oldestPosts = posts.slice(4, 7)
	const deadzone = posts.at(7)
	const pastPosts = posts.slice(8)

	return (
		<div className="grid grid-cols-12  gap-12">
			{featured && (
				<BlogPost post={featured} className="col-span-12" featured />
			)}
			{lastestPosts.length > 0 &&
				lastestPosts.map((post) => (
					<BlogPost
						className="col-span-12 md:col-span-6"
						key={post.id}
						post={post}
					/>
				))}
			{reminderPost && (
				<BlogPost post={reminderPost} className="col-span-12" featured />
			)}
			{oldestPosts.length > 0 &&
				oldestPosts.map((post) => (
					<BlogPost
						className="col-span-12 md:col-span-6 lg:col-span-4"
						key={post.id}
						post={post}
					/>
				))}
			{deadzone && (
				<BlogPost post={deadzone} className="col-span-12" featured />
			)}
			{pastPosts.length > 0 &&
				pastPosts.map((post) => (
					<BlogPost
						className="col-span-12 md:col-span-6"
						key={post.id}
						post={post}
					/>
				))}
		</div>
	)
}

export default BlogPosts
