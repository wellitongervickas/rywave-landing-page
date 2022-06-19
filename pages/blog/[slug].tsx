import type { NextPage } from 'next'


interface Property {
	title: string
}

const Property: NextPage<Property> = () => (
	<div>
		Blog single post
	</div>
)

export default Property
