"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState, useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdOutlineContactPhone, MdOutlinePerson } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { Orbitron, Poppins } from "next/font/google";
import { GiSkills } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { TbBrandFiverr } from "react-icons/tb";

export const orbitron = Orbitron({ subsets: ["latin"] });
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const social = [
  { href: "https://www.linkedin.com/in/matikuzzaman/", icon: <FaLinkedin /> },
  { href: "https://github.com/mohammad-atikuzzaman", icon: <FaGithub /> },
  { href: "https://www.facebook.com/mohammadakash20", icon: <FaFacebook /> },
  { href: "https://wa.me/+8801729414662", icon: <FaWhatsapp /> },
  { href: "https://www.fiverr.com/fbad_campaign", icon: <TbBrandFiverr /> },
];

const menus = [
  { nav: "Home", path: "/", icon: <FaHome /> },
  { nav: "About", path: "/about", icon: <MdOutlinePerson /> },
  { nav: "Skills", path: "/skills", icon: <GiSkills /> },
  { nav: "Projects", path: "/projects", icon: <GoProjectSymlink /> },
  {
    nav: "Contact",
    path: "/contact",
    icon: <MdOutlineContactPhone />,
  },
];

const NavBar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex flex-col items-center w-[90%] lg:w-[25%] lg:max-w-[250px] h-screen bg-[#040B14] text-white sticky top-0 z-50">
        <section className="p-6 flex flex-col items-center justify-center">
          <Image
            src="/photos/profile.png"
            priority={true}
            alt="Atikuzzaman profile photo"
            width={200}
            height={200}
            className="w-28 h-28 rounded-full border-8 border-gray-700 hover:border-sky-500 transition"
          />
          <h2
            className={`${orbitron.className} text-2xl font-bold mt-4 uppercase`}
          >
            Atikuzzaman
          </h2>
          <div className="flex space-x-2 mt-4">
            {social.map((item, index) => (
              <Link
                key={index}
                target="_blank"
                href={item.href}
                className="bg-gray-800 p-2 rounded-full bg-opacity-90 hover:bg-sky-500 transition"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </section>
        <menu className="mt-8 space-y-4 w-full overflow-auto px-4">
          {menus.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`${poppins.className} flex items-center gap-3 py-2 px-4 hover:text-sky-300 transition`}
            >
              {item.icon}
              {item.nav}
            </a>
          ))}
        </menu>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden flex items-center justify-between bg-[#040B14] bg-opacity-90 shadow shadow-sky-400 px-4 py-3 fixed top-0 w-full z-50">
        <Image
          src="/photos/profile.png"
          priority={true}
          className="w-11 h-11 rounded-full border-2 border-white shadow"
          alt="Atikuzzaman profile"
          width={40}
          height={40}
        />
        <button onClick={() => setIsMobileMenuOpen(true)}>
          <RiMenu2Fill className="text-3xl text-sky-100" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex flex-col items-center justify-center">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            <IoClose />
          </button>
          <div className="bg-[#040B14] w-[85%] max-w-[300px] p-6 rounded-lg text-white shadow-lg">
            <section className="flex flex-col items-center">
              <Image
                src="/photos/profile.png"
                priority={true}
                alt="Atikuzzaman profile"
                width={150}
                height={150}
                className="w-24 h-24 rounded-full border-4 border-gray-700"
              />
              <h2
                className={`${orbitron.className} text-xl font-bold mt-4 uppercase`}
              >
                Atikuzzaman
              </h2>
              <div className="flex space-x-2 mt-4">
                {social.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    className="bg-gray-800 p-2 rounded-full bg-opacity-90 hover:bg-sky-500 transition"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </section>

            <menu className="mt-8 space-y-4">
              {menus.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`${poppins.className} flex items-center gap-3 py-2 px-4 hover:text-sky-300 transition`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.nav}
                </a>
              ))}
            </menu>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
