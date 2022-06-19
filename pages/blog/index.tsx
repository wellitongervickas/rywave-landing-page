import BlogContainer from '@components/Blog/Container'
import type { NextPage } from 'next'

interface Property {
	title: string
}

const Property: NextPage<Property> = () => <BlogContainer />

export default Property
