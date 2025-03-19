import type { NextConfig } from "next";
import * as path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@components": path.resolve(__dirname, "components"),
            "@utils": path.resolve(__dirname, "utils"),
            "@styles": path.resolve(__dirname, "styles"),
        };
        return config;
    }
};

export default nextConfig;
