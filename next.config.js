/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["cdn.sanity.io"],
	},
	assetPrefix: "",
};

module.exports = nextConfig;
