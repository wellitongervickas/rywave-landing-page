import type { FC } from 'react'

import Logo from '@components/Logo'

import classnames from '@modules/handlers/classnames'
import Navbar from '@components/Nav/Bar'

interface Header {
	className?: string
}

const Header: FC<Header> = ({ className }) => (
	<header
		className={classnames.merge([
			className,
			'flex  items-center justify-between text-white container',
		])}
	>
		<Logo />
		<Navbar />
	</header>
)

export default Header
