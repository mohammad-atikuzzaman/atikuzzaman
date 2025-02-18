import { FC } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer:FC = () => {
  return (
    <footer className=" bg-slate-900 text-white flex flex-col md:flex-row gap-2 justify-between items-center p-2 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <p className="text-sm">Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className="flex gap-4">
        <a href="https://x.com/m_akash10">
          <FaTwitter className="text-xl" />
        </a>
        <a href="https://www.instagram.com/mohammad_akash_005/">
          <FaInstagram className="text-xl" />
        </a>
        <a href="https://www.facebook.com/mohammadakash20">
          <FaFacebook className="text-xl" />
        </a>
        <a href="https://www.linkedin.com/in/matikuzzaman/">
          <FaLinkedin className="text-xl" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
