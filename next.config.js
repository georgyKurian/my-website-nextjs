const withPWA = require('next-pwa');
const optimizedImages = require('next-optimized-images');

const prod = process.env.NODE_ENV === 'production';

module.exports = withPWA(
  optimizedImages({
    poweredByHeader: false,
    pwa: {
      disable: !prod,
      dest: 'public',
    },
    distDir: 'dist',
    reactStrictMode: true,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(png|jpe?g)$/,
        loader: 'file-loader',
      });
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  }),
);
