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
	},

	images: {
		domains: ['hi.rywave.io', 'i0.wp.com'],
	},

	trailingSlash: true,
}

module.exports = nextConfig
