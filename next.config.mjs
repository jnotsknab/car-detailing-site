/** @type {import('next').NextConfig} */

const contentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'unsafe-inline';
    img-src 'self' data:;
    font-src 'self';
    connect-src 'self';
    frame-src 'none';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
`.replace(/\n/g, '').trim();

const nextConfig = {
    async headers() {
        return [
            {
            source: '/:path*',
            headers: [
                { key: 'Content-Security-Policy', value: contentSecurityPolicy },
                { key: 'Permissions-Policy', value: 'geolocation=(), camera=(), microphone=()' },
                { key: 'X-Frame-Options', value: 'DENY' },
                { key: 'X-Content-Type-Options', value: 'nosniff' },
                { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
                { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
                { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
                { key: 'X-DNS-Prefetch-Control', value: 'on' },
                { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
                { key: 'Origin-Agent-Cluster', value: '?1' },
                ],
            },
        ];
    }
};

export default nextConfig;
