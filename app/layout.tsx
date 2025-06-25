import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";

export const metadata: Metadata = {
  title:
    "Atikuzzaman | MERN Stack Developer | Full Stack Engineer | React & Node.js Expert",
  description:
    "Professional MERN Stack Developer with expertise in React.js, Node.js, Express.js, and MongoDB. Building high-performance web applications with modern technologies.",
  keywords: [
    "Atikuzzaman",
    "Md Atikuzzaman",
    "Web Developer Atikuzzaman",
    "Frontend Developer Atikuzzaman",
    "Full Stack Developer Atikuzzaman",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Expert",
    "Web Application Development",
    "JavaScript Specialist",
    "Express.js Developer",
  ],
  robots: "index, follow, max-image-preview:large",
  icons: {
    icon: "/icons/favicon.png",
    apple: "/icons/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://atikuzzaman.vercel.app",
    title: "Atikuzzaman - Professional MERN Stack Developer",
    description:
      "Full Stack Web Developer specializing in modern JavaScript technologies",
    siteName: "Atikuzzaman Portfolio",
    images: [
      {
        url: "https://atikuzzaman.vercel.app/photos/atikuzzaman.png",
        width: 1200,
        height: 630,
        alt: "Atikuzzaman Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourhandle",
    creator: "@yourhandle",
    title: "Atikuzzaman - MERN Stack Developer",
    description:
      "Building modern web applications with cutting-edge technologies",
    images: ["https://atikuzzaman.vercel.app/photos/atikuzzaman.png"],
  },
  alternates: {
    canonical: "https://atikuzzaman.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Atikuzzaman",
    jobTitle: [
      "MERN Stack Developer",
      "Full Stack Developer",
      "Frontend Developer",
      "React Developer",
    ],
    url: "https://atikuzzaman.vercel.app",
    sameAs: [
      "https://github.com/mohammad-atikuzzaman",
      "https://www.linkedin.com/in/matikuzzaman",
      "https://x.com/m_akash10",
    ],
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Redux",
      "Next JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Socket IO",
      "REST APIs",
      ,
    ],
    image: "https://atikuzzaman.vercel.app/photos/profile.png",
    description:
      "Professional MERN Stack Developer with 3+ years of experience in web application development",
  };

  return (
    <html
      lang="en"
      itemScope
      itemType="http://schema.org/WebPage"
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                document.documentElement.className = theme;
              })();
            `,
          }}
        />
      </head>

      <body className="flex flex-col lg:flex-row bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        <NavBar />
        <main
          itemScope
          itemProp="mainContentOfPage"
          className="flex-1 overflow-y-auto lg:h-screen"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
