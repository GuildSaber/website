/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['bsdr.fdom.eu', 'cdn.scoresaber.com', 'eu.cdn.beatsaver.com', 'cdn.beatleader.xyz', 'avatars.akamai.steamstatic.com'],
	},
};

module.exports = nextConfig;
