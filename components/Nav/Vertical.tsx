import type { FC } from 'react'

import classnames from '@modules/handlers/classnames'

import Link from '@components/Link'

interface VerticalNav {
	className?: string
	title: string
	routes: {
		[key: string]: {
			path: string
			label: string
		}
	}
}

const VerticalNav: FC<VerticalNav> = ({ className, routes, title }) => (
	<>
		<style jsx>
			{`
				--shadow-color: 0_0.1rem_0.1rem_rgba (255, 255, 255, 0.5);
			`}
		</style>
		<div className={classnames.merge([className, 'space-y-[1.43rem]'])}>
			<h4 className="text-base font-normal">{title}</h4>
			<ul className="grid grid-flow-row auto-rows-auto">
				{Object.values(routes).map((route, index) => (
					<li key={index}>
						<Link
							activeLinkClassName="!font-bold drop-shadow-[var(--shadow-color)]"
							href={route.path}
							passHref
						>
							<a
								className={classnames.merge([
									'group text-base font-light transition-all duration-150',
									'hover:font-bold hover:drop-shadow-[var(--shadow-color)]',
								])}
							>
								<span className="group-hover:scale-x-2 block">
									{route.label}
								</span>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	</>
)

export default VerticalNav
