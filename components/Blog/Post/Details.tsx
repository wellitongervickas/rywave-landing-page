import type { FC } from 'react'

import date from '@modules/handlers/date'

interface PostDetails {
	post: Blog.Post
	className?: string
	featured?: boolean
}

const PostDetails: FC<PostDetails> = ({ post }) => (
	<address className="flex space-x-2 text-xs not-italic text-gray-500">
		<time dateTime={post.date.toString()}>{date.format(post.date)}</time>
		<span>by</span>
		<ul className="flex space-x-2">
			{post.authors.map((author) => (
				<li key={author.id}>
					<span>{author.name}</span>
				</li>
			))}
		</ul>
		<span>on</span>
		<ul className="flex space-x-2">
			{post.categories.map((category, index) => (
				<li key={category.id}>
					<span>{category.name}</span>
					{post.categories.length >= 0 &&
						index !== post.categories.length - 1 &&
						','}
				</li>
			))}
		</ul>
	</address>
)

export default PostDetails
