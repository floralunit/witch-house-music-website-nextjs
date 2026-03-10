import { NextResponse } from 'next/server'

export function middleware(request) {
    const acceptLang = request.headers.get('accept-language') || ''

    const isRussian = acceptLang.toLowerCase().includes('ru')

    const response = NextResponse.next()

    response.headers.set('x-user-lang', isRussian ? 'ru' : 'en')

    return response
}

export const config = {
    matcher: ['/((?!_next|api|favicon.ico).*)'],
}