/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	experimental: {
		outputStandalone: true,
	},

	trailingSlash: true,
}

module.exports = nextConfig
