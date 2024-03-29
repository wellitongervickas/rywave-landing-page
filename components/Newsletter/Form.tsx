import type { FC, FormEvent } from 'react'

import { useState, useMemo, useCallback } from 'react'

import ArrowIcon from '@components/Icons/Arrow'
import Loading from '@components/Loading'
import classnames from '@modules/handlers/classnames'
import services from '@modules/services'

interface NewsletterForm {
	placeholder?: string
}

const NewsletterForm: FC<NewsletterForm> = ({
	placeholder = 'Subscribe to our Newsletter',
}) => {
	const [isLoading, setIsLoading] = useState(false)
	const [email, setEmail] = useState('')
	const [error, setError] = useState('')
	const [success, setSuccess] = useState(false)

	const isButtonDisabled = useMemo(
		() => isLoading || !email || !!error,
		[isLoading, email, error]
	)

	const doSubscription = useCallback(
		async (e: FormEvent) => {
			e.preventDefault()

			if (isLoading) return

			if (email.length < 5) return setError('Please enter an email address')

			setError('')
			setSuccess(false)
			setIsLoading(true)

			try {
				await services.newsletter.subscribe(email)
				setSuccess(true)
			} catch (error: any) {
				setError(error.message)
			}

			setIsLoading(false)
		},
		[email, isLoading]
	)

	const doChangeInputValue = (value: string) => {
		setError('')
		setEmail(value)
	}

	return (
		<div className="space-y-6">
			<form
				onSubmit={doSubscription}
				className="group flex items-center justify-center"
				noValidate
			>
				<input
					placeholder={placeholder}
					type="email"
					className={classnames.merge([
						'w-full border-0 bg-stone-800 py-3 px-4 focus-visible:outline-none',
						'focus:border-none focus:shadow-none',
					])}
					onChange={(e) => doChangeInputValue(e.target.value)}
				/>
				<button
					aria-label="Subscribe"
					type="submit"
					className="items-center bg-white disabled:bg-stone-900"
					disabled={isButtonDisabled}
				>
					{isLoading ? (
						<div className=" p-[1.15rem]">
							<Loading isTiny />
						</div>
					) : (
						<div className="p-3">
							<ArrowIcon
								height={24}
								width={24}
								className={isButtonDisabled ? 'text-gray-400' : 'text-gray-800'}
							/>
						</div>
					)}
				</button>
			</form>
			{error && <div className="text-red-400 opacity-75">{error}</div>}
			{success && (
				<div className="text-green-400 opacity-75">
					Newsletter subscribed successfully
				</div>
			)}
		</div>
	)
}

export default NewsletterForm
