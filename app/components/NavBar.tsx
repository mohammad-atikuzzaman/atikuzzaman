import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const NavBar: FC = () => {
  return (
    <nav className="w-full md:w-[30%] bg-gray-900 text-white flex flex-col items-center sticky top-0 h-auto md:h-screen">
      <section className="p-6 flex flex-col items-center justify-center">
        <Image
          src="/photos/profile.png"
          alt="Atikuzzaman profile photo"
          title="Atikuzzaman profile photo"
          width={400}
          height={400}
          className="w-24 h-24 rounded-full border-4 border-gray-700 profile-image"
        />
        <h1 className="text-2xl font-bold mt-4">Alex Smith</h1>
        <div className="flex space-x-4 mt-4">
          <Link href={"#"} className="bg-gray-800 p-2 rounded-full bg-opacity-90 hover:bg-sky-500">
            <FaLinkedin />
          </Link>
          <Link href={"#"} className="bg-gray-800 p-2 rounded-full bg-opacity-90 hover:bg-sky-500">
            <FaGithub />
          </Link>
          <Link href={"#"} className="bg-gray-800 p-2 rounded-full bg-opacity-90 hover:bg-sky-500">
            <FaFacebook />
          </Link>
          <Link href={"#"} className="bg-gray-800 p-2 rounded-full bg-opacity-90 hover:bg-sky-500">
            <FaWhatsapp />
          </Link>
          <Link href={"#"} className="bg-gray-800 p-2 rounded-full bg-opacity-90 hover:bg-sky-500">
            <FaTwitter />
          </Link>
        </div>
      </section>
      <menu className="mt-8 space-y-4 w-full block text-left overflow-auto scrollable-nav">
        {["Home", "About", "Resume", "Portfolio", "Services", "Contact"].map(
          (item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 px-4 hover:bg-gray-800 rounded"
            >
              {item}
            </a>
          )
        )}
      </menu>
    </nav>
  );
};

export default NavBar;
