/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  styledComponents: true,
  swcMinify: true,
  compiler: {
    // Fix for console error: "Prop `className` did not match. Server"
    // https://nextjs.org/docs/advanced-features/compiler#styled-components
    styledComponents: true, // ssr and displayName will be configured by default
  },
  images: {
    // If you need to use remote images uncomment and configure the following:
    // domains: ['democracy-images.s3.amazonaws.com'],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },

  // Caution: can significantly increase build times and memory usage while being generated.
  // https://nextjs.org/docs/advanced-features/source-maps
  productionBrowserSourceMaps: true,

  // Redirects
  rewrites: async () => {
    return [
      {
        source: '/healthz',
        destination: '/api/health',
      },
    ];
  },
};
