import type { AppProps } from 'next/app'

import Head from 'next/head'

import appConfig from '@app.config'
import head from '@modules/handlers/head'
import 'tailwindcss/tailwind.css'

import Layout from '@layouts/default'

interface App extends AppProps {
	title?: string
}

const App = ({ Component, pageProps }: App) => (
	<>
		<Head>
			<title>{head.getTitle(appConfig.name, pageProps)}</title>

			<meta
				name="description"
				content={pageProps.description || appConfig.description}
			/>
		</Head>

		<style jsx global>
			{`
				body {
					@apply font-montserrat bg-gray-darkness overflow-x-hidden text-white;
				}
			`}
		</style>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</>
)

export default App
