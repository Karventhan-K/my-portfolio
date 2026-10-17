import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Karventhan K | Senior MERN Stack & Full-Stack Developer",
  description: "Portfolio of Karventhan K — Senior MERN Stack Developer with 4+ years of experience building high-scale web platforms (Debitmydata.com), React/Next.js frontends, Node.js APIs, MongoDB, and AWS cloud systems. Available immediately for urgent roles.",
  keywords: [
    "MERN Stack Developer",
    "Senior React Developer",
    "Node.js Engineer",
    "MongoDB",
    "Express.js",
    "Next.js",
    "Karventhan",
    "Full-Stack Developer",
    "Debitmydata"
  ],
  authors: [{ name: "Karventhan K", url: "https://github.com/Karventhan-K" }],
  openGraph: {
    title: "Karventhan K | Senior MERN Stack Developer",
    description: "4+ years of experience architecting MERN & Next.js applications, scalable backend APIs, and cloud deployments. View interactive resume and portfolio.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/karventhan.jpg",
        width: 800,
        height: 800,
        alt: "Karventhan K - Senior MERN Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karventhan K | Senior MERN Stack Developer",
    description: "Explore Karventhan's portfolio, featured MERN projects (Debitmydata.com), and interactive resume.",
    images: ["/karventhan.jpg"],
  },
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
      </head>
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
