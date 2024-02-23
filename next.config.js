/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            's2medica.s3.amazonaws.com',
            'api.s2medica.dev.uex.io',
            'uex-dev.s3.amazonaws.com',
            'localhost'
        ],
    },
    env: {
        API_URL: process.env.API_URL,
    },
}

module.exports = nextConfig
