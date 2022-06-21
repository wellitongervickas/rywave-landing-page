import type { FC } from 'react'

import CardWrapper from '@components/CardWrapper'
import NewsletterForm from '@components/Newsletter/Form'

interface NewsletterCTA {}

const NewsletterCTA: FC<NewsletterCTA> = () => (
	<CardWrapper>
		<div className="max-w-50 flex flex-col items-center justify-center space-y-6 p-12 text-center">
			<h3 className="text-2xl font-bold lg:text-3xl">
				Subscribe our Newsletter
			</h3>
			<NewsletterForm />
		</div>
	</CardWrapper>
)

export default NewsletterCTA
