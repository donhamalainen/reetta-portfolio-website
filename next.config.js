/** @type {import('next').NextConfig} */
const nextConfig = {
  /* i18n: {
    locales: ['en', 'fi'],
    defaultLocale: 'fi',
    localeDetection: false,
  }, */
  async rewrites() {
    return [
      // TODO
      {
        source: "/yhteistiedot",
        destination: "/about",
      },
      {
        source: "/tyonaytteet/:slug*",
        destination: "/blog/:slug*", // Matched parameters can be used in the destination
      },
      {
        source: "/cv",
        destination: "/cv.pdf", // Matched parameters can be used in the destination
      },
      // TODO: Lisää reittejä tarvittaessa
    ];
  },
};

module.exports = nextConfig;
