"use client";

import { useRef, FormEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaMobile,
} from "react-icons/fa";
import Title from "./reusableComponents/Title";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  // Animation variants
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 }
    }
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_jnxzp7g", "template_mawzx2r", form.current, {
        publicKey: "iTEKd8x3FPZ0Yb0bb",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Mail sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.error("FAILED...", error.text);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Mail sending failed",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };

  return (
    <motion.div
      id="contact"
      aria-label="Contact Information"

      className="relative bg-gradient-to-b from-sky-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-100px" }}
      variants={container}
    >

      <div className="px-4 py-12 rounded-xl  gap-8 w-full max-w-screen-xl mx-auto">
        <motion.div className="mb-4 text-center" variants={item}>
          <Title title="Contact" />
          <motion.p 
            className="text-gray-600 dark:text-gray-300 mt-4 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Get in touch with me. Im always ready to discuss your project and explore new opportunities.
          </motion.p>
        </motion.div>

        <motion.div className="" variants={container}>
          <motion.div 
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-5 text-gray-800 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Contact Info
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <ContactInfo
                icon={<FaMobile className="text-blue-500 dark:text-blue-400 text-xl" />}
                label="Phone"
                value="+8801729414662"
                link="tel:+8801729414662"
              />
              <ContactInfo
                icon={<FaLocationArrow className="text-green-500 dark:text-green-400 text-xl" />}
                label="Location"
                value="Pabna, Bangladesh"
              />
              <ContactInfo
                icon={<FaEnvelope className="text-red-500 dark:text-red-400 text-xl" />}
                label="Email"
                value="akash203037@gmail.com"
                link="mailto:akash203037@gmail.com"
              />
              <ContactInfo
                icon={<FaGithub className="text-gray-700 dark:text-gray-300 text-xl" />}
                label="Github"
                value="mohammad-atikuzzaman"
                link="https://github.com/mohammad-atikuzzaman"
              />
              <ContactInfo
                icon={<FaLinkedin className="text-blue-600 dark:text-blue-500 text-xl" />}
                label="LinkedIn"
                value="matikuzzaman/"
                link="https://www.linkedin.com/in/matikuzzaman/"
              />
              <ContactInfo
                icon={<FaFacebook className="text-blue-700 dark:text-blue-600 text-xl" />}
                label="Facebook"
                value="mohammadakash20"
                link="https://www.facebook.com/mohammadakash20"
              />
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-5 text-gray-800 dark:text-white border-b pb-2 border-gray-200 dark:border-gray-700">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Send me a Message
              </span>
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5 text-sky-900 dark:text-gray-300"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <InputField
                  label="Your Name"
                  name="from_name"
                  type="text"
                  placeholder="John Doe"
                />
                <InputField
                  label="Your Email"
                  name="from_email"
                  type="email"
                  placeholder="test@test.com"
                />
              </div>
              <TextareaField
                label="Your Message"
                name="message"
                placeholder="Write your message here"
              />
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full"
                whileHover={{ scale: 1.02, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;

interface ContactInfoProps {
  icon: ReactNode;
  label: string;
  value: string;
  link?: string;
}

const ContactInfo = ({ icon, label, value, link }: ContactInfoProps) => (
  <motion.div 
    className="flex items-center gap-2 dark:text-gray-300"
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ margin: "-50px" }} 
    transition={{ duration: 0.5 }}
  >
    {icon}
    <div>
      <p className="dark:text-gray-400">{label}</p>
      {link ? (
        <a href={link} className="text-sm dark:text-blue-300 hover:underline">
          {value}
        </a>
      ) : (
        <h4 className="dark:text-white">{value}</h4>
      )}
    </div>
  </motion.div>
);

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const InputField = ({ label, name, type, placeholder }: InputFieldProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ margin: "-50px" }} 
    transition={{ duration: 0.5 }}
  >
    <label htmlFor={name} className="dark:text-gray-300">{label}</label>
    <br />
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full p-2 font-semibold rounded-md border-2 border-sky-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      required
    />
  </motion.div>
);

interface TextareaFieldProps {
  label: string;
  name: string;
  placeholder: string;
}

const TextareaField = ({ label, name, placeholder }: TextareaFieldProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ margin: "-50px" }} 
    transition={{ duration: 0.5 }}
  >
    <label htmlFor={name} className="dark:text-gray-300">{label}</label>
    <br />
    <textarea
      name={name}
      placeholder={placeholder}
      className="w-full p-2 font-semibold rounded-md border-2 border-sky-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
      required
    ></textarea>
  </motion.div>
);