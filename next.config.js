/** @type {import('next').NextConfig} */
const nextConfig = {
  /* i18n: {
    locales: ['en', 'fi'],
    defaultLocale: 'fi',
    localeDetection: false,
  }, */
  images: {
    domains: ["cdn.sanity.io"],
  },
  async rewrites() {
    return [
      // TODO
      {
        source: "/yhteistiedot",
        destination: "/about",
      },
      {
        source: "/tyonaytteet",
        destination: "/blog", // Matched parameters can be used in the destination
      },
      {
        source: "/projektit/:slug*",
        destination: "/projects/:slug*", // Matched parameters can be used in the destination
      },
      {
        source: "/juttunaytteet/:slug*",
        destination: "/reference/:slug*", // Matched parameters can be used in the destination
      },
      {
        source: "/kuvagalleria",
        destination: "/photogallery", // Matched parameters can be used in the destination
      },
    ];
  },
};

module.exports = nextConfig;
