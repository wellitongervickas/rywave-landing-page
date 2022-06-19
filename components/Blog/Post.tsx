import CardWrapper from '@components/CardWrapper'
import type { FC } from 'react'

interface BlogPost {
	post: Blog.Post
}

const BlogPost: FC<BlogPost> = ({ post }) => (
	<CardWrapper>{post.title}</CardWrapper>
)

export default BlogPost
