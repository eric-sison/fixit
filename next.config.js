/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "172.20.110.45",
                port: '4500',
                pathname: '/**'
            }
        ]
    }
}

module.exports = nextConfig
