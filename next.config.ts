import { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		domains: ['www.pokemon.com'],
	},
	webpack: config => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})
		return config
	},
}

export default nextConfig
