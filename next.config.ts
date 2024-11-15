const withTM = require("next-transpile-modules")([
  "rc-util",
  "rc-pagination",
  "rc-picker",
  "rc-input",
  "@ant-design/icons",
  "@ant-design/icons-svg", // Transpile the icons SVG module as well
]);

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: false, // Ensure ESM modules are handled properly
  },
  images: {
    domains: ['via.placeholder.com'], // Allow external image domains
  },
  webpack(config: { externals: any[]; }, { isServer }: any) {
    if (isServer) {
      // Fix for SSR issue with certain modules
      config.externals = ['@ant-design/icons-svg', ...config.externals];
    }

    return config;
  },
});
