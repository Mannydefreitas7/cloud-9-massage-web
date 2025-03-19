import type { NextConfig } from "next";
import * as path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@components": path.resolve(__dirname, "components"),
            "@hooks": path.resolve(__dirname, "hooks"),
            "@emails": path.resolve(__dirname, "emails"),
            "@lib": path.resolve(__dirname, "lib"),
        };
        return config;
    }
};

export default nextConfig;
