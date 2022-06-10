import type { FC } from 'react'
import classnames from '@modules/handlers/classnames'

interface Phase {
	done: boolean
	text: string
}

const Phase: FC<Phase> = ({ done, text }) => {
	return (
		<div className="flex justify-start space-x-2">
			<div className="flex flex-none items-start justify-center">
				<span
					className={classnames.merge([
						'inline-block w-6',
						done
							? 'mt-2 h-[0.1rem] bg-green-400'
							: 'border-gray-stroke mt-1 h-4 w-4 rounded border',
					])}
				/>
			</div>
			<div
				className="text-gray-stroke flex-1"
				dangerouslySetInnerHTML={{ __html: text }}
			/>
		</div>
	)
}

export default Phase
