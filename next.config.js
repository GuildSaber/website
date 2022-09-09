/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["bsdr.fdom.eu"],
	},
	experimental: {
		images:
		{
			allowFutureImage: true
		}
	}
};

module.exports = nextConfig;
