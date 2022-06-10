import type { FC } from 'react'
import { useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'

import BurguerIcon from '@components/Icons/Burguer'
import NavMain from '@components/Nav/Main'
import Logo from '@components/Logo'
import classnames from '@modules/handlers/classnames'

const Navbar: FC = () => {
	const [open, setOpen] = useState<boolean>(false)
	const route = useRouter()

	const doToggleMenu = useCallback(
		(preventReOpen?: boolean) => {
			if (preventReOpen && !open) {
				return
			}

			setOpen(!open)
		},
		[setOpen, open]
	)

	useEffect(() => {
		const preventReOpen = true

		route.events.on('routeChangeStart', () => doToggleMenu(preventReOpen))
	}, [doToggleMenu, route])

	return (
		<div>
			<div className="md:hidden">
				<BurguerIcon
					className="cursor-pointer "
					width="18px"
					height="18px"
					onClick={() => doToggleMenu()}
				/>
			</div>
			<nav className="hidden md:block">
				<NavMain className="grid grid-flow-col grid-cols-[3] gap-4" />
			</nav>
			<nav
				className={classnames.merge([
					'md:hidden',
					{
						'invisible relative overflow-hidden': !open,
						visible: open,
					},
				])}
			>
				<div className="absolute top-0 right-0 z-[998] h-screen w-screen bg-black bg-opacity-60" />
				<div
					className={classnames.merge([
						open ? 'right-0' : 'right-full',
						'fixed top-0 z-[999] flex transition-all duration-300',
						'right-0 h-screen w-screen flex-col space-y-6',
						'bg-black p-12 shadow md:hidden',
					])}
				>
					<div className="relative flex justify-end">
						<span
							className="absolute top-6 right-0 cursor-pointer text-lg text-gray"
							onClick={() => doToggleMenu()}
						>
							&#x2716;
						</span>
					</div>
					<Logo className="pb-8 pl-4 text-white" />
					<NavMain className="flex flex-col space-y-6 text-white" />
				</div>
			</nav>
		</div>
	)
}

export default Navbar
