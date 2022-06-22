/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	experimental: {
		outputStandalone: true,
	},

	env: {
		// wordpress adapter
		WORDPRESS_API_BASE_URL: process.env.WORDPRESS_API_BASE_URL,
	},

	images: {
		domains: ['hi.rywave.io', 'i0.wp.com'],
	},

	trailingSlash: true,
}

module.exports = nextConfig
