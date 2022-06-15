import type { FC } from 'react'

import Image from '@components/Image'
import SocialJoin from '@components/Social/Join'
import classnames from '@modules/handlers/classnames'

interface Hero {
	className?: string
}

const Hero: FC<Hero> = ({ className }) => (
	<>
		<style jsx>
			{`
				.text-transparent-2 {
					@apply text-transparent;

					-webkit-text-stroke-width: 0.01rem;
					-webkit-text-stroke-color: white;
				}
			`}
		</style>
		<div
			className={classnames.merge([className, 'group grid grid-cols-5 gap-6'])}
		>
			<div className="col-start-1 col-end-6 md:col-end-3">
				<div className="h-full w-full">
					<Image
						src="/assets/images/genesis-collection/card.png"
						alt="Genesis Collection"
						height={701}
						width={473}
						layout="intrinsic"
						className="transition-all duration-1000 group-hover:-translate-y-4"
					/>
				</div>
			</div>
			<div className="col-start-1 col-end-6 flex flex-col justify-center md:col-start-3">
				<section className="flex flex-col justify-center space-y-8">
					<div>
						<h1
							className={classnames.merge([
								'text-transparent-2 relative font-astrospace font-black uppercase',
								'text-5xl lg:text-[6.25rem]  2xl:text-[9.25rem] 2xl:leading-none',
							])}
						>
							Genesis
						</h1>
						<h2 className="font-astrospace text-3xl uppercase lg:text-[3.65rem]  2xl:text-[4.65rem] 2xl:leading-none">
							NFT Collection
						</h2>
					</div>
					<div>
						<h3 className="mb-4 text-lg font-bold">
							Our first collection consists of 5555 genesis NFTs which unlocks
							ultimate resources of the Rywave Ecosystem.
						</h3>
						<p className="text-lg">
							Becoming a holder means you are awarded the unlimited
							NFT-as-a-subscription to the Discotheque, along with the full
							Listen-2-Earn model, full cosmetics, community council credits and
							receiving dividends from Rywave`s mainstream revenue.
						</p>
					</div>
					<SocialJoin />
				</section>
			</div>
		</div>
	</>
)

export default Hero
