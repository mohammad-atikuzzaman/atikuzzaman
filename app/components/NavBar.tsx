import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import {
  FaBarsProgress,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdOutlineContactPhone, MdOutlinePerson } from "react-icons/md";
import { IoDocument } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";

import { Orbitron, Poppins } from "next/font/google";
export const orbitron = Orbitron({ subsets: ["latin"] });
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const NavBar: FC = () => {
  return (
    <nav className="w-full md:w-[25%] md:max-w-[250px] bg-[#040B14] text-white flex flex-col items-center sticky top-0 h-auto md:h-screen">
      <section className="p-6 flex flex-col items-center justify-center">
        <Image
          src="/photos/profile.png"
          alt="Atikuzzaman profile photo"
          title="Atikuzzaman profile photo"
          width={200}
          height={200}
          className="w-28 rounded-full border-8 border-gray-700 profile-image hover:border-sky-500 hover:border-opacity-90"
        />
        <h2
          className={`${orbitron.className} text-2xl font-bold mt-4 uppercase`}
        >
          Atikuzzaman
        </h2>
        <div className="flex space-x-2 mt-4">
          <Link
            href={"#"}
            className="bg-gray-800 p-2 rounded-full bg-opacity-90 hover:bg-sky-500"
          >
            <FaLinkedin />
          </Link>
          <Link
            href={"#"}
            className="bg-gray-800 p-2 rounded-full bg-opacity-90 hover:bg-sky-500"
          >
            <FaGithub />
          </Link>
          <Link
            href={"#"}
            className="bg-gray-800 p-2 rounded-full bg-opacity-90 hover:bg-sky-500"
          >
            <FaFacebook />
          </Link>
          <Link
            href={"#"}
            className="bg-gray-800 p-2 rounded-full bg-opacity-90 hover:bg-sky-500"
          >
            <FaWhatsapp />
          </Link>
          <Link
            href={"#"}
            className="bg-gray-800 p-2 rounded-full bg-opacity-90 hover:bg-sky-500"
          >
            <FaTwitter />
          </Link>
        </div>
      </section>
      <menu className="mt-8 space-y-4 w-full block overflow-auto scrollable-nav ml-4">
        {[
          { path: "Home", icon: <FaHome /> },
          { path: "About", icon: <MdOutlinePerson /> },
          { path: "Resume", icon: <IoDocument /> },
          { path: "Portfolio", icon: <GoProjectSymlink /> },
          { path: "Services", icon: <FaBarsProgress /> },
          { path: "Contact", icon: <MdOutlineContactPhone /> },
        ].map((item) => (
          <a
            key={item?.path}
            href={`#${item?.path.toLowerCase()}`}
            className={`${poppins.className} flex font-light items-center gap-3 py-2 px-4 hover:text-sky-300 rounded `}
          >
            {item?.icon}
            {item?.path}
          </a>
        ))}
      </menu>
    </nav>
  );
};

export default NavBar;
