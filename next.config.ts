import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['74.225.249.68', 'localhost'],
  devIndicators: false,
  async headers() {
    const iframeHeaders = [
      { key: 'X-Frame-Options', value: 'ALLOWALL' },
      { key: 'Content-Security-Policy', value: 'frame-ancestors *' },
    ];
    return [{ source: '/embed', headers: iframeHeaders }];
  },
};

export default nextConfig;
