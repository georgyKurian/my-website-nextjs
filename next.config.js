const withPWA = require('next-pwa');

const prod = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  poweredByHeader: false,
  pwa: {
    disable: !prod,
    dest: 'public',
  },
  distDir: 'dist',
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
