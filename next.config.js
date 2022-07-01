/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	experimental: {
		outputStandalone: true,
	},

	env: {
		// wordpress adapter
		WORDPRESS_API_BASE_URL: process.env.WORDPRESS_API_BASE_URL,
		WORDPRESS_API_FORM_SECRET_TOKEN:
			process.env.WORDPRESS_API_FORM_SECRET_TOKEN,

		// Google Recaptcha
		RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
	},

	serverRuntimeConfig: {
		env: {
			RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY,
		},
	},

	images: {
		domains: ['hi.rywave.io', 'i0.wp.com'],
	},

	trailingSlash: true,
}

module.exports = nextConfig
