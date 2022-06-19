import BlogContainer from '@components/Blog/Container'
import type { NextPage } from 'next'

interface Blog {
	title: string
}

export function getServerSideProps() {
	return {
		props: {
			title: 'Blog',
			description:
				'Learn about cryptocurrency, NFTs, and blockchain, discover our latest product updates, partnership announcements, user stories, and more',
		},
	}
}

const Blog: NextPage<Blog> = () => (
	<div className="space-y-12 py-20 container">
		<BlogContainer />
	</div>
)

export default Blog
