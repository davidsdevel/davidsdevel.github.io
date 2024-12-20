import { NextResponse } from 'next/server'
 
const isDev = process.env.NODE_ENV !== 'production';

export function middleware(request) {

    const {nextUrl} = request;

    const isLogged = !!request.cookies.get(isDev
        ? 'davidsdevel.session-token'
        : '__Secure-davidsdevel.session-token'
    );

    if (isLogged) {
        if (nextUrl.pathname.startsWith('/admin')) {
            nextUrl.pathname = nextUrl.pathname.replace('/admin', '/admin/dashboard');
            
            return NextResponse.rewrite(nextUrl);
        }
    } else {
        if (nextUrl.pathname.startsWith('/admin/')) {
            nextUrl.pathname = '/admin';
            
            return NextResponse.redirect(nextUrl);
        } else if (nextUrl.pathname === '/admin') {
            nextUrl.pathname = '/api/auth/signin';
            
            return NextResponse.rewrite(nextUrl);
        }
    }
    
    return NextResponse.next()
}
 
export const config = {
    matcher: [
      '/admin',
      '/admin/:path*'
    ]
  }