import type { FC } from 'react'

import CardWrapper from '@components/CardWrapper'
import NewsletterForm from '@components/Newsletter/Form'

interface NewsletterCTA {}

const NewsletterCTA: FC<NewsletterCTA> = () => (
	<CardWrapper>
		<div className="mx-auto flex w-full flex-col items-center justify-center space-y-6 p-12 text-center md:max-w-[70%] lg:max-w-[50%]">
			<h3 className="text-base font-bold md:text-2xl lg:text-3xl">
				Subscribe our Newsletter
			</h3>
			<NewsletterForm placeholder="Type your e-mail" />
		</div>
	</CardWrapper>
)

export default NewsletterCTA
