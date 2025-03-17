import type { Metadata } from "next";
import "./globals.css";
import NavBar, { poppins } from "./components/NavBar";

export const metadata: Metadata = {
  title: "Mohammad Atikuzzaman | MERN Stack Web Developer",
  description:
    "I'm a passionate MERN Stack Web Developer specializing in React.js, Next.js, Node.js, and MongoDB. I build fast, responsive, and scalable web applications.",
  keywords: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "Front-End Developer",
    "Next.js",
    "React.js",
    "JavaScript",
    "MongoDB",
    "Web Development",
  ],
  authors: [{ name: "Mohammad Atikuzzaman", url: "https://yourportfolio.com" }],
  icons: {
    icon: "/icons/profile.png",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    title: "Mohammad Atikuzzaman | MERN Stack Developer",
    description:
      "Passionate MERN Stack Developer specializing in Next.js, React.js, Node.js, and MongoDB. I build modern web applications.",
    url: "https://yourportfolio.com",
    siteName: "Atikuzzaman Portfolio",
    images: [
      {
        url: "https://yourportfolio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    creator: "@yourTwitterHandle",
    title: "Mohammad Atikuzzaman | MERN Stack Developer",
    description:
      "Passionate MERN Stack Developer specializing in Next.js, React.js, Node.js, and MongoDB.",
    images: ["https://yourportfolio.com/twitter-preview.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://yourportfolio.com" />
      </head>
      <body className={`${poppins.className} flex flex-col lg:flex-row`}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
