export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://karventhan-k.github.io/my-portfolio";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
