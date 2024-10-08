/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: [
            'lh3.googleusercontent.com', 
            'tailwindui.com', 
            'm.media-amazon.com', 
            'www.kiayaaccessories.com', 
            'atsuko.com', 
            "i.ebayimg.com", 
            "th.bing.com", 
            "i.imgur.com", 
            "res.cloudinary.com"
        ],
    },
    webpack(config) {
        config.experiments = {
            ...config.experiments,
            topLevelAwait: true,
        }
        return config
    }
}

module.exports = nextConfig
