import Image from "next/image";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="w-full md:w-[30%] bg-gray-900 text-white flex flex-col items-center sticky top-0 h-auto md:h-screen">
      <section className="p-6 flex flex-col items-center justify-center">
        <Image
          src="/photos/profile.png"
          alt="atikuzzaman profile photo"
          title="aitkuzzamana profile photo"
          width={400}
          height={400}
          className="w-24 h-24 rounded-full border-4 border-gray-700 profile-image"
        />
        <h1 className="text-2xl font-bold mt-4">Alex Smith</h1>
        <div className="flex space-x-4 mt-4">
          <FaLinkedin />
          <FaGithub />
          <FaFacebook />
          <FaWhatsapp />
          <FaTwitter />
        </div>
      </section>
      <menu className="mt-8 space-y-4 w-full block text-left overflow-auto scrollable-nav">
        <a href="#home" className="block py-2 px-4 hover:bg-gray-800 rounded">
          Home
        </a>
        <a href="#about" className="block py-2 px-4 hover:bg-gray-800 rounded">
          About
        </a>
        <a href="#resume" className="block py-2 px-4 hover:bg-gray-800 rounded">
          Resume
        </a>
        <a
          href="#portfolio"
          className="block py-2 px-4 hover:bg-gray-800 rounded"
        >
          Portfolio
        </a>
        <a
          href="#services"
          className="block py-2 px-4 hover:bg-gray-800 rounded"
        >
          Services
        </a>
        <a
          href="#contact"
          className="block py-2 px-4 hover:bg-gray-800 rounded"
        >
          Contact
        </a>
        <a href="#resume" className="block py-2 px-4 hover:bg-gray-800 rounded">
          Resume
        </a>
        <a
          href="#portfolio"
          className="block py-2 px-4 hover:bg-gray-800 rounded"
        >
          Portfolio
        </a>
        <a
          href="#services"
          className="block py-2 px-4 hover:bg-gray-800 rounded"
        >
          Services
        </a>
        <a
          href="#contact"
          className="block py-2 px-4 hover:bg-gray-800 rounded"
        >
          Contact
        </a>
        <a href="#resume" className="block py-2 px-4 hover:bg-gray-800 rounded">
          Resume
        </a>
        <a
          href="#portfolio"
          className="block py-2 px-4 hover:bg-gray-800 rounded"
        >
          Portfolio
        </a>
        <a
          href="#services"
          className="block py-2 px-4 hover:bg-gray-800 rounded"
        >
          Services
        </a>
        <a
          href="#contact"
          className="block py-2 px-4 hover:bg-gray-800 rounded"
        >
          Contact
        </a>
        <a href="#resume" className="block py-2 px-4 hover:bg-gray-800 rounded">
          Resume
        </a>
        <a
          href="#portfolio"
          className="block py-2 px-4 hover:bg-gray-800 rounded"
        >
          Portfolio
        </a>
        <a
          href="#services"
          className="block py-2 px-4 hover:bg-gray-800 rounded"
        >
          Services
        </a>
        <a
          href="#contact"
          className="block py-2 px-4 hover:bg-gray-800 rounded"
        >
          Contact
        </a>
      </menu>
    </nav>
  );
};

export default NavBar;
