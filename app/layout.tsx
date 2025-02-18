import type { Metadata } from "next";
import "./globals.css";
import NavBar, { poppins } from "./components/NavBar";

export const metadata: Metadata = {
  title: "Atikuzzaman",
  description:
    "An Aspiring Front-End Developer || Mern-Stack Developer || Full Stack Developer",
  icons: "/icons/profile.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
