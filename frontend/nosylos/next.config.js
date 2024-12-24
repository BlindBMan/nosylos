module.exports = {
  // proxy the Posthog requests to avoid being blocked by adblockers
  async rewrites() {
      return [
          {
              source: "/ingest/static/:path*",
              destination: "https://eu-assets.i.posthog.com/static/:path*",
          },
          {
              source: "/ingest/:path*",
              destination: "https://eu.i.posthog.com/:path*",
          },
      ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
  // Cloudfront cdn for assets
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'TODO',
              port: '',
              pathname: '/**',
          },
      ],
  },
}
