import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import { Teko } from 'next/font/google'


export const teko = Teko({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Atikuzzaman",
  description: "An Aspiring Front-End Developer || Mern-Stack Developer || Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${teko.className} flex`}
      > <NavBar/>
        {children}
      </body>
    </html>
  );
}
