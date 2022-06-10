import type { FC } from 'react'

import classnames from '@modules/handlers/classnames'
import routes from '@app.routes'

import Link from '@components/Link'

interface NavMain {
	className?: string
}

const NavMain: FC<NavMain> = (props) => (
	<>
		<style jsx>
			{`
				--shadow-color: 0_0.1rem_0.1rem_rgba (255, 255, 255, 0.5);
			`}
		</style>
		<ul className={classnames.merge([props.className])}>
			{Object.values(routes.navMain).map((route, index) => (
				<li key={index} className="px-4 font-manrope">
					<Link
						activeLinkClassName="!font-bold drop-shadow-[var(--shadow-color)]"
						href={route.path}
						passHref
					>
						<a className="group text-lg transition-all duration-150 hover:font-bold hover:drop-shadow-[var(--shadow-color)]">
							<span className="block group-hover:translate-x-1 group-hover:scale-x-105">
								{route.label}
							</span>
						</a>
					</Link>
				</li>
			))}
		</ul>
	</>
)

export default NavMain
