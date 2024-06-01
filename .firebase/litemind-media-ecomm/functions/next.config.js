var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// csp.js
var require_csp = __commonJS({
  "csp.js"(exports2, module2) {
    var policies = {
      "default-src": ["'self'"],
      "script-src": [
        "'self'",
        "'unsafe-inline'",
        "'unsafe-eval'",
        "https://checkout.stripe.com",
        "https://js.stripe.com",
        "https://maps.googleapis.com"
      ],
      "child-src": ["'self'"],
      "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      "img-src": ["'self'", "https://*.stripe.com", "https://raw.githubusercontent.com"],
      "font-src": ["'self'"],
      "frame-src": [
        "'self'",
        "https://checkout.stripe.com",
        "https://js.stripe.com",
        "https://hooks.stripe.com"
      ],
      "connect-src": [
        "'self'",
        "https://checkout.stripe.com",
        "https://api.stripe.com",
        "https://maps.googleapis.com"
      ]
    };
    module2.exports = Object.entries(policies).map(([key, value]) => {
      if (Array.isArray(value)) {
        return `${key} ${value.join(" ")}`;
      }
      return "";
    }).join("; ");
  }
});

// redirects.js
var require_redirects = __commonJS({
  "redirects.js"(exports2, module2) {
    module2.exports = async () => {
      const internetExplorerRedirect = {
        source: "/:path((?!ie-incompatible.html$).*)",
        // all pages except the incompatibility page
        has: [
          {
            type: "header",
            key: "user-agent",
            value: "(.*Trident.*)"
            // all ie browsers
          }
        ],
        permanent: false,
        destination: "/ie-incompatible.html"
      };
      try {
        const redirectsRes = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/api/redirects?limit=1000&depth=1`
        );
        const redirectsData = await redirectsRes.json();
        const { docs } = redirectsData;
        let dynamicRedirects = [];
        if (docs) {
          docs.forEach((doc) => {
            const { from, to: { type, url, reference } = {} } = doc;
            let source = from.replace(process.env.NEXT_PUBLIC_SERVER_URL, "").split("?")[0].toLowerCase();
            if (source.endsWith("/"))
              source = source.slice(0, -1);
            let destination = "/";
            if (type === "custom" && url) {
              destination = url.replace(process.env.NEXT_PUBLIC_SERVER_URL, "");
            }
            if (type === "reference" && typeof reference.value === "object" && reference?.value?._status === "published") {
              destination = `${process.env.NEXT_PUBLIC_SERVER_URL}/${reference.relationTo !== "pages" ? `${reference.relationTo}/` : ""}${reference.value.slug}`;
            }
            const redirect = {
              source,
              destination,
              permanent: true
            };
            if (source.startsWith("/") && destination && source !== destination) {
              return dynamicRedirects.push(redirect);
            }
            return;
          });
        }
        const redirects2 = [internetExplorerRedirect, ...dynamicRedirects];
        return redirects2;
      } catch (error) {
        if (process.env.NODE_ENV === "production") {
          console.error(`Error configuring redirects: ${error}`);
        }
        return [];
      }
    };
  }
});

// next.config.js
var ContentSecurityPolicy = require_csp();
var redirects = require_redirects();
var nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", process.env.NEXT_PUBLIC_SERVER_URL].filter(Boolean).map((url) => url.replace(/https?:\/\//, ""))
  },
  redirects,
  async headers() {
    const headers = [];
    if (!process.env.NEXT_PUBLIC_IS_LIVE) {
      headers.push({
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex"
          }
        ],
        source: "/:path*"
      });
    }
    headers.push({
      source: "/(.*)",
      headers: [
        {
          key: "Content-Security-Policy",
          value: ContentSecurityPolicy
        }
      ]
    });
    return headers;
  }
};
module.exports = nextConfig;
