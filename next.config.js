/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['bsdr.fdom.eu', 'cdn.discordapp.com'],
	},
};

module.exports = nextConfig;
