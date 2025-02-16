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
import { orbitron } from "../layout";
import { FaHome } from "react-icons/fa";
import { MdOutlinePerson } from "react-icons/md";
import { IoDocument } from "react-icons/io5";

const NavBar: FC = () => {
  return (
    <nav className="w-full md:w-[30%] bg-gray-900 text-white flex flex-col items-center sticky top-0 h-auto md:h-screen">
      <section className="p-6 flex flex-col items-center justify-center">
        <Image
          src="/photos/profile.jpg"
          alt="Atikuzzaman profile photo"
          title="Atikuzzaman profile photo"
          width={200}
          height={200}
          className="w-32 h-32 rounded-full border-4 border-gray-700 profile-image"
        />
        <h2 className={`${orbitron.className} text-2xl font-bold mt-4 uppercase`}>Atikuzzaman</h2>
        <div className="flex space-x-2 mt-4">
          <Link href={"#"} className="bg-gray-700 p-2 rounded-full bg-opacity-90 hover:bg-sky-500">
            <FaLinkedin />
          </Link>
          <Link href={"#"} className="bg-gray-700 p-2 rounded-full bg-opacity-90 hover:bg-sky-500">
            <FaGithub />
          </Link>
          <Link href={"#"} className="bg-gray-700 p-2 rounded-full bg-opacity-90 hover:bg-sky-500">
            <FaFacebook />
          </Link>
          <Link href={"#"} className="bg-gray-700 p-2 rounded-full bg-opacity-90 hover:bg-sky-500">
            <FaWhatsapp />
          </Link>
          <Link href={"#"} className="bg-gray-700 p-2 rounded-full bg-opacity-90 hover:bg-sky-500">
            <FaTwitter />
          </Link>
        </div>
      </section>
      <menu className="mt-8 space-y-4 w-full block text-left overflow-auto scrollable-nav">
        {[{path:"Home", icon: <FaHome/>}, {path:"About", icon: <MdOutlinePerson/>}, {path:"Resume", icons: <IoDocument/>}, "Portfolio", "Services", "Contact"].map(
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
