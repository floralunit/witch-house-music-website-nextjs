export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://witch-house.vercel.app/sitemap.xml",
  };
}