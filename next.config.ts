const withTM = require("next-transpile-modules")([
  "rc-util",
  "rc-pagination",
  "rc-picker",
  "rc-input",
  "rc-tree",
  "rc-table",
  "@ant-design/icons",
  "@ant-design/icons-svg",
]);

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: false,
  },
  images: {
    domains: ["via.placeholder.com", "i.imgur.com", "imgur.com"],
  },
  webpack(config: { externals: any[] }, { isServer }: any) {
    if (isServer) {
      config.externals = ["@ant-design/icons-svg", ...config.externals];
    }

    return config;
  },
});
