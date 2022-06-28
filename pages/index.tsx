import appConfig from '@app.config'
import HomepageContainer from '@components/Homepage/Container'
import type { NextPage } from 'next'

interface Homepage {
	title: string
}

export async function getStaticProps() {
	return {
		props: {
			title: appConfig.description,
			description: appConfig.description,
		},
	}
}

const Homepage: NextPage<Homepage> = () => <HomepageContainer />

export default Homepage
