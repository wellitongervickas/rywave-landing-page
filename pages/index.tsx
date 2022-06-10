import appConfig from '@app.config'
import Container from '@components/Homepage/Container'
import type { NextPage } from 'next'

interface Homepage {
	title: string
}

export function getStaticProps() {
	return {
		props: {
			title: appConfig.description,
		},
	}
}

const Homepage: NextPage<Homepage> = () => <Container />

export default Homepage
