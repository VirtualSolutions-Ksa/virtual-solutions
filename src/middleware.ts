import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/utils/auth";
import { locales } from "./i18n/i18n.config";

const intlMiddleware = createMiddleware({
    defaultLocale: "en",
    locales,
    localeDetection: false,
    localePrefix: "as-needed",
});

export default async function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const pathname = url.pathname;

    // **Authentication Handling for /admin**
    // Check for both `/admin` and locale-prefixed `/admin` routes (e.g., `/ar/admin`)
    const isAdminRoute = pathname.startsWith("/admin") || pathname.match(/^\/[a-z]{2}\/admin/);

    if (isAdminRoute) {
        
        const token = req.cookies.get("token");

        if (!token) {
            url.pathname = `/login`; // Redirect to locale-prefixed login page
            return NextResponse.redirect(url);
        }

        const isValid = await verifyToken(token.value);
        
        if (!isValid) {
            url.pathname = `/login`; // Redirect to locale-prefixed login page
            return NextResponse.redirect(url);
        }
    }

    // **Locale Handling**: Apply locale middleware for other routes
    const intlResponse = intlMiddleware(req);
    if (intlResponse) {
        return intlResponse;
    }

    // Proceed for valid requests
    return NextResponse.next();
}

// Matcher for paths
export const config = {
    matcher: [
        "/((?!api|_next|_vercel|.*\\..*).*)", // Matches all paths except static files and API routes
        "/admin/:path*",                     // Protects admin routes
        "/[a-z]{2}/admin/:path*",            // Protects locale-prefixed admin routes
    ],
};
