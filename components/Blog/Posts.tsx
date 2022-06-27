import type { FC } from 'react'

import BlogPost from '@components/Blog/Post'
import NewsletterCTA from '@components/Newsletter/CallToAction'

interface BlogPosts {
	posts: Blog.Posts
}

const BlogPosts: FC<BlogPosts> = ({ posts = [] }) => {
	const lastestPosts = posts?.slice(0, 5)
	const reminderPost = posts?.slice(5, 6)?.[0]
	const oldestPosts = posts?.slice(6, 9)
	const deadzone = posts?.slice(9, 10)?.[0]
	const pastPosts = posts?.slice(10)

	return (
		<div className="grid grid-cols-12 gap-6 lg:gap-12">
			{lastestPosts?.length > 0 &&
				lastestPosts.map((post) => (
					<BlogPost
						className="col-span-12 md:col-span-6 lg:col-span-4"
						key={post.id}
						post={post}
					/>
				))}
			{reminderPost && (
				<BlogPost
					post={reminderPost}
					className="col-span-12 md:col-span-6 lg:col-span-4"
				/>
			)}
			{(lastestPosts || reminderPost) && (
				<div className="col-span-12">
					<NewsletterCTA />
				</div>
			)}
			{oldestPosts?.length > 0 &&
				oldestPosts.map((post) => (
					<BlogPost
						className="col-span-12 md:col-span-6 lg:col-span-4"
						key={post.id}
						post={post}
					/>
				))}
			{deadzone && (
				<BlogPost
					post={deadzone}
					className="col-span-12 md:col-span-6 lg:col-span-4"
				/>
			)}
			{pastPosts?.length > 0 && (
				<>
					{pastPosts.map((post) => (
						<BlogPost
							className="col-span-12 md:col-span-6 lg:col-span-4"
							key={post.id}
							post={post}
						/>
					))}

					<div className="col-span-12">
						<NewsletterCTA />
					</div>
				</>
			)}
		</div>
	)
}

export default BlogPosts
