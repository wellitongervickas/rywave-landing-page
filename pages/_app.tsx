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
				html,
				body {
					@apply h-screen;
				}
				body {
					@apply overflow-x-hidden bg-gray-darkness font-montserrat text-white;
				}

				@font-face {
					font-family: 'AstroSpace';
					src: url('/assets/fonts/astro-space.otf');
					font-style: normal;
				}

				:global(.grecaptcha-badge) {
					@apply invisible;
				}
			`}
		</style>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</>
)

export default App
