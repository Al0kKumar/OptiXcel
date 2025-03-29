// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Ensures API routes work correctly
  reactStrictMode: true, // Optional, but helps catch errors
};

export default nextConfig;
