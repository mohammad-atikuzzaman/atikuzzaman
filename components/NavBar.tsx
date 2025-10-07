"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState, useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { Orbitron, Poppins } from "next/font/google";
import { IoClose } from "react-icons/io5";
import { RiContactsFill, RiMenu2Fill } from "react-icons/ri";
import { TbBrandFiverr } from "react-icons/tb";
import { SiHyperskill, SiSaltproject } from "react-icons/si";
import { MdContacts } from "react-icons/md";


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
  { nav: "About", path: "/about", icon: <RiContactsFill /> },
  { nav: "Skills", path: "/skills", icon: <SiHyperskill /> },
  { nav: "Projects", path: "/projects", icon: <SiSaltproject /> },
  {
    nav: "Contact",
    path: "/contact",
    icon: <MdContacts />,
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
      <nav className="hidden lg:flex flex-col items-center w-[90%] lg:w-[25%] lg:max-w-[250px] h-screen bg-gradient-to-b from-indigo-900 via-blue-900 to-purple-950 text-white sticky top-0 z-50 shadow-xl">
        <section className="p-6 flex flex-col items-center justify-center mt-8">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur group-hover:blur-md transition duration-1000"></div>
            <Image
              src="/photos/profile.png"
              priority={true}
              alt="Atikuzzaman profile photo"
              width={200}
              height={200}
              className="relative w-32 h-32 rounded-full border-4 border-blue-500 hover:border-purple-500 transition-all duration-300 z-10"
            />
          </div>
          <h2
            className={`${orbitron.className} text-2xl font-bold mt-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent`}
          >
            Atikuzzaman
          </h2>
          <p className="text-gray-300 text-sm mt-2 text-center">MERN Stack Developer</p>
          <div className="flex space-x-3 mt-6">
            {social.map((item, index) => (
              <Link
                key={index}
                target="_blank"
                href={item.href}
                className="bg-gray-800 p-2 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transform hover:scale-110 transition-all duration-300"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </section>
        <menu className="mt-6 space-y-2 w-full overflow-auto px-4">
          {menus.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`${poppins.className} flex items-center gap-3 py-3 px-6 rounded-lg hover:bg-blue-800/50 hover:text-blue-300 transition-all duration-300 relative overflow-hidden group`}
            >
              <span className="absolute left-0 w-1 h-0 bg-blue-500 group-hover:h-full transition-all duration-300"></span>
              <span className="relative z-10 text-xl group-hover:translate-x-1 transition-transform duration-300">{item.icon}</span>
              <span className="relative z-10 font-medium group-hover:translate-x-1 transition-transform duration-300">{item.nav}</span>
            </a>
          ))}
        </menu>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden flex items-center justify-between bg-gradient-to-r from-indigo-900 to-purple-900 bg-opacity-95 backdrop-blur-sm shadow-lg px-4 py-3 fixed top-0 w-full z-50">
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
        <div className="lg:hidden fixed inset-0 bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-2xl bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-all"
            >
              <IoClose />
            </button>
          </div>
          
          <div className="flex flex-col items-center mt-8">
            <div className="relative group mb-6">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur"></div>
              <Image
                src="/photos/profile.png"
                alt="Atikuzzaman profile photo"
                width={100}
                height={100}
                className="relative w-24 h-24 rounded-full border-2 border-blue-500 z-10"
              />
            </div>
            <h2 className={`${orbitron.className} text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent`}>
              Atikuzzaman
            </h2>
            <p className="text-gray-300 text-sm mb-8">MERN Stack Developer</p>
          </div>
          
          <div className="flex flex-col items-center justify-center flex-grow gap-3 px-8">
            {menus.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white w-full text-lg py-3 px-6 flex items-center gap-3 rounded-lg bg-blue-900/50 hover:bg-blue-800 transition-all duration-300"
              >
                <span className="text-blue-400">{item.icon}</span>
                {item.nav}
              </a>
            ))}
          </div>
          
          <div className="flex justify-center gap-4 py-8">
            {social.map((item, index) => (
              <Link
                key={index}
                target="_blank"
                href={item.href}
                className="bg-gray-800 p-2 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transform hover:scale-110 transition-all duration-300"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
