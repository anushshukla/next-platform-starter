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
                value: "worker-src 'self' blob:;script-src 'self' 'unsafe-inline' *.visualwebsiteoptimizer.com app.vwo.com;",
              },
            ],
          },
        ]
    },
};

module.exports = nextConfig;
