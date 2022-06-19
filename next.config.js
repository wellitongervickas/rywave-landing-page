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

	trailingSlash: true,
}

module.exports = nextConfig
