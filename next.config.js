/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'Content-Security-Policy',
                value: "default-src 'self'; worker-src 'self' blob;script-src 'self' 'unsafe-inline'; connect-src *.visualwebsiteoptimizer.com;",
              },
            ],
          },
        ]
    },
};

module.exports = nextConfig;
