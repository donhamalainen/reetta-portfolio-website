/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
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
        destination: "/blog",
      },
      {
        source: "/projektit",
        destination: "/projects",
      },
      {
        source: "/juttunaytteet",
        destination: "/reference",
      },
      {
        source: "/kuvagalleria",
        destination: "/photogallery",
      },
    ];
  },
};

module.exports = nextConfig;
