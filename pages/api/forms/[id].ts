import WordpressAdapter from '@modules/services/adapters/wordpress'
import type { NextApiRequest, NextApiResponse } from 'next'

const form = async (req: NextApiRequest, res: NextApiResponse) => {
	/**
	 * This workahound is to avoid exposes API keys or Wordpress URL that is opened to request without limits
	 * In that way recaptcha provide a secure token to confirm that is not a bot or something like
	 */

	if (req.method !== 'POST')
		return res
			.status(405)
			.json({ code: 405, message: `${req.method} Method not allowed!` })

	const { headers } = req

	const { id } = req.query
	const body = req.body

	try {
		const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${headers['x-recaptcha']}`

		const recaptchaToken = await fetch(verifyUrl, { method: 'POST' }).then(
			(r) => r.json()
		)

		if (!recaptchaToken?.success) {
			return res
				.status(401)
				.json({ code: 401, message: 'Invalid recaptcha token!' })
		}

		const adapter = new WordpressAdapter()

		const result = await adapter.forms.submit(id as string, body)

		if (!result) {
			return res.status(422).json({ code: 422, message: 'Invalid params!' })
		}

		return res.status(200).json({ success: true })
	} catch (error) {
		return res
			.status(500)
			.json({ code: 500, message: 'Internal server error!' })
	}
}

export default form
