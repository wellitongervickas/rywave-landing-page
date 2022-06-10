import type { FC } from 'react'

import Header from '@components/Header'
import Footer from '@components/Footer'

const Layout: FC<React.HTMLProps<HTMLDivElement>> = ({ children }) => (
	<div className="h-screen">
		<Header className="h-[6.25rem]" />
		<div>{children}</div>
		<Footer />
	</div>
)

export default Layout
