import { FC } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer:FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Atikuzzaman. All rights reserved.
            </p>
          </div>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
