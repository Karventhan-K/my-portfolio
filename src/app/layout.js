import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://karventhan-k.github.io/my-portfolio"),
  title: {
    default: "Karventhan K | Senior MERN Stack & Full-Stack Developer",
    template: "%s | Karventhan K",
  },
  description:
    "Portfolio & Interactive Resume of Karventhan K, a Senior MERN Stack & Full-Stack Developer with 4+ years of experience architecting high-scale platforms like Debitmydata.com, Cofetti.ai, and BandBooker.com. Expert in MongoDB, Express.js, React.js, Node.js, Next.js, and AWS.",
  keywords: [
    "Karventhan",
    "Karventhan K",
    "MERN Stack Developer",
    "Senior Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Express.js",
    "MongoDB",
    "Next.js Developer",
    "Debitmydata.com",
    "Full Stack Engineer Coimbatore",
    "FastAPI Python Developer",
    "AWS Cloud Engineer",
    "Hiring MERN Stack Developer"
  ],
  authors: [{ name: "Karventhan K", url: "https://github.com/Karventhan-K" }],
  creator: "Karventhan K",
  publisher: "Karventhan K",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Karventhan K | Senior MERN Stack & Full-Stack Developer",
    description:
      "Explore the portfolio and interactive resume of Karventhan K. 4+ years experience architecting MERN & Next.js systems, high-traffic APIs, and AWS cloud deployments. Flagship: Debitmydata.com.",
    url: "/",
    siteName: "Karventhan K - MERN Stack Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Karventhan K - Senior MERN Stack Developer Portfolio Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karventhan K | Senior MERN Stack Developer",
    description:
      "Available Urgently for MERN Roles. 4+ years exp in React, Node.js, Express, MongoDB, Next.js, and AWS. Flagship: Debitmydata.com.",
    creator: "@Karventhan_K",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Karventhan K Portfolio",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://github.com/Karventhan-K#person",
      name: "Karventhan K",
      jobTitle: "Senior MERN Stack & Full-Stack Developer",
      description:
        "Senior Software Engineer specializing in MERN Stack (MongoDB, Express.js, React.js, Node.js), Next.js, Python, and AWS cloud architectures.",
      email: "karventhan.work@gmail.com",
      telephone: "+916369078990",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        addressCountry: "India",
      },
      sameAs: [
        "https://github.com/Karventhan-K",
        "https://www.linkedin.com/in/karventhan-k",
      ],
      knowsAbout: [
        "MERN Stack",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Python",
        "FastAPI",
        "Django",
        "PostgreSQL",
        "Amazon Web Services (AWS)",
        "Docker",
        "REST APIs",
        "WebSockets",
        "Stripe API",
        "OpenAI API",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Pollachi Institute of Engineering and Technology",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://github.com/Karventhan-K/my-portfolio#website",
      name: "Karventhan K Portfolio",
      url: "https://github.com/Karventhan-K/my-portfolio",
      description: "Official portfolio and interactive resume of Karventhan K.",
      publisher: {
        "@id": "https://github.com/Karventhan-K#person",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          precedence="default"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
