/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    topLevelAwait: true,
  },
  webpack: (config) => {
    // this will override the experiments
    config.experiments = { ...config.experiments, topLevelAwait: true };
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true
    return config;
  },
  experiments: {
    topLevelAwait: true,
  },
  async rewrites() {
    return [
      {
        source: "/_next/static/:path*",
        destination: "/_next/static/:path*",
      },
      {
        source: "/:path*",
        destination: "/_next/:path*",
      },
    ];
  },
};
