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
  }),
);

