import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/zerspanung",
        destination: "/produkte/zerspanung",
        permanent: true,
      },
      {
        source: "/hebetechnik",
        destination: "/produkte/hebetechnik",
        permanent: true,
      },
      {
        source: "/secato-werkzeuge",
        destination: "/produkte/zerspanung/secato-werkzeuge",
        permanent: true,
      },
      {
        source: "/ansprechpartner",
        destination: "/kontakt/ansprechpartner",
        permanent: true,
      },
      {
        source: "/produkte/zerspanungs-technik/:path*",
        destination: "/produkte/zerspanung",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
