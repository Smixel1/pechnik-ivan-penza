/** Apply defense-in-depth HTTP headers to every server response. */
export function withSecurityHeaders(response: Response, request: Request): Response {
  const headers = new Headers(response.headers);

  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("X-Frame-Options", "DENY");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=(), usb=()");
  headers.set("Cross-Origin-Opener-Policy", "same-origin");
  headers.set("Cross-Origin-Resource-Policy", "same-site");

  if (import.meta.env.PROD) {
    headers.set("Content-Security-Policy", buildContentSecurityPolicy());

    try {
      const url = new URL(request.url);
      if (url.protocol === "https:") {
        headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
      }
    } catch {
      // Ignore malformed request URLs in header helper.
    }
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function buildContentSecurityPolicy(): string {
  const directives = [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "img-src 'self' data:",
    "font-src 'self' https://fonts.gstatic.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "script-src 'self' 'unsafe-inline'",
    "connect-src 'self'",
  ];

  return directives.join("; ");
}
