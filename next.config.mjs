/** @type {import('next').NextConfig} */
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
