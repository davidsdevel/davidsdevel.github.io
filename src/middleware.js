import { NextResponse } from 'next/server';
import { checkRateLimit, getRateLimitHeaders } from '@/lib/rateLimit';

const SECURITY_HEADERS = {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'X-DNS-Prefetch-Control': 'on',
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'X-XSS-Protection': '1; mode=block',
};

export function middleware(request) {
    const response = NextResponse.next();

    for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
        response.headers.set(key, value);
    }

    const { pathname } = request.nextUrl;
    const ip = request.headers.get('x-forwarded-for') || request.ip || 'unknown';

    if (pathname.startsWith('/api/')) {
        const { allowed, remaining } = checkRateLimit(`api:${ip}`, { maxRequests: 30, windowMs: 60000 });

        if (!allowed) {
            return NextResponse.json(
                { error: 'Too many requests' },
                { status: 429 }
            );
        }

        const headers = getRateLimitHeaders(`api:${ip}`, 30);
        for (const [key, value] of Object.entries(headers)) {
            response.headers.set(key, value);
        }
    }

    return response;
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|images/).*)'],
};
