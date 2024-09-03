/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.communitydragon.org",
        port: "",
        pathname:
          "/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/**",
      },
    ],
  },
};

export default nextConfig;
