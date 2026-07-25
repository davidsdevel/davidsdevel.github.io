/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['3005-idx-davidsdevelgithubio-1723918495762.cluster-ux5mmlia3zhhask7riihruxydo.cloudworkstations.dev'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lettercms-api.davidsdevel.com' },
      { protocol: 'https', hostname: 'hubspot-credentials-na1.s3.amazonaws.com' },
      { protocol: 'https', hostname: 'logos-world.net' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
}

module.exports = nextConfig
