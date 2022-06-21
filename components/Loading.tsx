import type { FC } from 'react'
import classnames from '@modules/handlers/classnames'

interface Loading {
	isTiny?: boolean
	className?: string
	onClick?: () => void
}

const Loading: FC<Loading> = ({ className, isTiny, onClick = () => {} }) => (
	<>
		<style jsx>{`
			--loading-width: ${isTiny ? '0.15rem' : '0.25rem'};
			--loading-height: ${isTiny ? '0.65rem' : '1rem'};

			.wave {
				@apply relative h-[var(--loading-height)] w-[var(--loading-width)] transform rounded-full bg-white bg-blend-darken;
			}

			.wave-1 {
				animation: wave-animation-1 1.5s infinite;
			}
			.wave-2 {
				animation: wave-animation-3 3s infinite;
			}
			.wave-3 {
				animation: wave-animation-2 2.5s infinite;
			}
			.wave-4 {
				animation: wave-animation-3 3s infinite;
			}
			.wave-5 {
				animation: wave-animation-1 1.5s infinite;
			}

			@keyframes wave-animation-1 {
				0% {
					@apply top-0 translate-x-0;
				}
				50% {
					@apply -top-2 translate-x-[0.01rem];
				}
				100% {
					@apply top-0 translate-x-0;
				}
			}

			@keyframes wave-animation-2 {
				0% {
					@apply -top-2;
				}
				50% {
					@apply top-2;
				}
				100% {
					@apply -top-2;
				}
			}

			@keyframes wave-animation-3 {
				0% {
					@apply -top-3;
				}
				50% {
					@apply top-2;
				}
				100% {
					@apply -top-3;
				}
			}
		`}</style>
		<div className={classnames.merge([className])} onClick={onClick}>
			<div className="relative flex flex-row space-x-1">
				{!isTiny && <div className="wave wave-1" />}
				<div className="wave wave-2" />
				<div className="wave wave-3" />
				<div className="wave wave-4" />
				{!isTiny && <div className="wave wave-5" />}
			</div>
		</div>
	</>
)

export default Loading
