import type { FC } from 'react'

import appConfig from '@app.config'
import classnames from '@modules/handlers/classnames'
import routes from '@app.routes'

import Logo from '@components/Logo'
import SocialJoin from '@components/Social/Join'
import VerticalNav from '@components/Nav/Vertical'

interface Footer {
	className?: string
}

const copyText = [new Date().getFullYear(), appConfig.copyright].join(' ')

const Footer: FC<Footer> = ({ className }) => (
	<footer className={classnames.merge([className, 'bg-offwhite pb-[6.56rem]'])}>
		<div className="space-y-[1.65rem] pt-[4.8rem] container">
			<Logo width={150} height={32} />
			<div className="grid grid-cols-2 gap-12 lg:gap-0">
				<SocialJoin className="col-span-2 lg:col-span-1" />
				<div className="col-span-2 flex flex-col items-start space-y-12 md:flex-row md:space-y-0 lg:col-span-1">
					<VerticalNav
						title="Company"
						routes={routes.navFooter.company}
						className="w-full"
					/>
					<VerticalNav
						title="Resources"
						routes={routes.navFooter.resources}
						className="w-full"
					/>
				</div>
			</div>
			<p className="text-sm">&copy; {copyText}</p>
		</div>
	</footer>
)

export default Footer
