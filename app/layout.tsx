import type { Metadata, Viewport } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title:
    "Atikuzzaman | MERN Stack Developer | Full Stack Engineer | React & Node.js Expert",
  description:
    "Professional MERN Stack Developer specialized in React.js, Node.js, Express.js, and MongoDB. Building high-performance web applications using modern technologies.",
  keywords: [
    "Atikuzzaman",
    "Md Atikuzzaman",
    "Mohammad Atikuzzaman",
    "Web Developer Atikuzzaman",
    "Frontend Developer Atikuzzaman",
    "Full Stack Developer Atikuzzaman",
    "MERN Stack Developer Atikuzzaman",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "MongoDB Expert",
    "Web Application Development",
    "JavaScript Expert",
    "Express.js Developer",
    "Bangladeshi Web Developer",
    "Pabna Web Developer",
    "Freelance Developer",
    "Remote Web Developer",
  ],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  icons: {
    icon: "/icons/favicon.png",
    apple: "/icons/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://atikuzzaman.vercel.app",
    title: "Atikuzzaman - Professional MERN Stack Developer",
    description:
      "Full Stack Web Developer specialized in modern JavaScript technologies",
    siteName: "Atikuzzaman Portfolio",
    images: [
      {
        url: "https://atikuzzaman.vercel.app/photos/atikuzzaman.png",
        width: 1200,
        height: 630,
        alt: "Atikuzzaman Portfolio Preview",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@m_akash10",
    creator: "@m_akash10",
    title: "Atikuzzaman - MERN Stack Developer",
    description:
      "Building advanced web applications using modern technologies",
    images: ["https://atikuzzaman.vercel.app/photos/atikuzzaman.png"],
  },
  alternates: {
    canonical: "https://atikuzzaman.vercel.app",
    languages: {
      'en-US': 'https://atikuzzaman.vercel.app',
    },
  },
  authors: [{ name: "Mohammad Atikuzzaman", url: "https://atikuzzaman.vercel.app" }],
  creator: "Mohammad Atikuzzaman",
  publisher: "Mohammad Atikuzzaman",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  metadataBase: new URL("https://atikuzzaman.vercel.app"),
  verification: {
    google: "google-site-verification-code", // আপনার Google Search Console কোড যোগ করুন
  },
  category: "portfolio",
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
    alternateName: "Mohammad Atikuzzaman",
    givenName: "Atikuzzaman",
    familyName: "Mohammad",
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
      "https://www.facebook.com/mohammadakash20"
    ],
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Redux",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Socket.IO",
      "REST APIs",
      "Tailwind CSS",
      "Material UI"
    ],
    image: "https://atikuzzaman.vercel.app/photos/profile.png",
    description: "Professional MERN Stack Developer with 3+ years of web application development experience",
    nationality: "Bangladeshi",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pabna",
      addressRegion: "Rajshahi",
      addressCountry: "Bangladesh"
    },
    email: "akash203037@gmail.com",
    telephone: "+8801729414662",
    knowsLanguage: ["Bengali", "English"],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Pabna University of Science and Technology",
      sameAs: "https://www.pust.ac.bd/"
    },
    workLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pabna",
        addressCountry: "Bangladesh"
      }
    }
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
        <SpeedInsights/>
      </body>
    </html>
  );
}
