module.exports = {
      images: {
        domains: ['images.unsplash.com'],
      },
      webpack: (config) => {
        config.cache = true
        return config
      }
    }
