import type { FC } from 'react'

import CardWrapper from '@components/CardWrapper'
import Image from '@components/Image'
import classnames from '@modules/handlers/classnames'
import { LogoIcon } from '@components/Logo'
import SocialJoinIcon from '@components/Social/Icon'

interface TeamMember {
	className?: string
	member: Team.Member
}

const TeamMember: FC<TeamMember> = ({ member, className }) => {
	const imageSrc = member.image.sizes.large || member.image.sizes.medium

	return (
		<CardWrapper
			className={classnames.merge([className, 'group space-y-6 p-6'])}
		>
			<div className="relative top-0 min-h-[252px] transition-all duration-300 group-hover:-top-1">
				{imageSrc ? (
					<div className="border-b-transparent transition-all duration-150 group-hover:border-b-[4px] group-hover:border-b-white">
						<Image
							src={imageSrc}
							alt={member.name}
							layout="responsive"
							width={252}
							height={252}
							priority={false}
							objectFit="cover"
							objectPosition="center"
							loading="lazy"
						/>
					</div>
				) : (
					<div className="absolute flex h-full w-full items-center justify-center bg-stone-900">
						<LogoIcon
							className="text-gray-200 opacity-10"
							height={28}
							width={134}
						/>
					</div>
				)}
			</div>
			<div>
				<h2 className="text-base font-bold">{member.name}</h2>
				<h3 className="text-xs text-gray-stroke">{member.position}</h3>
			</div>
			<div>
				<ul className="flex space-x-4">
					{member.social.map((item, key) => (
						<li key={key}>
							<SocialJoinIcon
								link={item.link}
								label={item.type}
								image={`/assets/images/social/${item.type}.svg`}
							/>
						</li>
					))}
				</ul>
			</div>
		</CardWrapper>
	)
}

export default TeamMember
