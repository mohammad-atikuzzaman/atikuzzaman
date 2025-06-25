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
      itemScope
      itemType="https://schema.org/ContactPoint"
      className="bg-sky-50 dark:bg-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ margin: "-100px" }}
      variants={container}
    >
      <div className="px-4 py-12 rounded-xl md:flex justify-between gap-8 w-full max-w-screen-xl mx-auto">
        <motion.div className="mb-4 md:w-[30%]" variants={item}>
          <Title title="Contact" />
        </motion.div>

        <motion.div className="md:w-[70%]" variants={container}>
          <motion.div variants={item}>
            <h2 className="text-2xl font-semibold mb-3 dark:text-white">Contact Info</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ContactInfo
                icon={<FaMobile className="dark:text-blue-300" />}
                label="Phone_"
                value="+8801729414662"
                link="tel:+8801729414662"
              />
              <ContactInfo
                icon={<FaLocationArrow className="dark:text-blue-300" />}
                label="Location_"
                value="Pabna, Bangladesh"
              />
              <ContactInfo
                icon={<FaEnvelope className="dark:text-blue-300" />}
                label="Email_"
                value="akash203037@gmail.com"
                link="mailto:akash203037@gmail.com"
              />
              <ContactInfo
                icon={<FaGithub className="dark:text-blue-300" />}
                label="Github_"
                value="mohammad-atikuzzaman"
                link="https://github.com/mohammad-atikuzzaman"
              />
              <ContactInfo
                icon={<FaLinkedin className="dark:text-blue-300" />}
                label="LinkedIn"
                value="matikuzzaman/"
                link="https://www.linkedin.com/in/matikuzzaman/"
              />
              <ContactInfo
                icon={<FaFacebook className="dark:text-blue-300" />}
                label="Facebook"
                value="mohammadakash20"
                link="https://www.facebook.com/mohammadakash20"
              />
            </div>
          </motion.div>

          <br />
          <motion.hr 
            className="bg-slate-800 border-slate-800 dark:bg-gray-600 dark:border-gray-600"
            variants={item}
          />

          <motion.div variants={item}>
            <h2 className="font-semibold text-2xl my-3 dark:text-white">Send me Mail</h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-3 text-sky-900 dark:text-gray-300"
            >
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
              <TextareaField
                label="Your Message"
                name="message"
                placeholder="Write your message here"
              />
              <motion.input
                type="submit"
                value="Send"
                className="bg-sky-900 dark:bg-blue-700 text-white w-full font-bold border-b-sky-700 dark:border-b-blue-900 border-b-[3px] hover:bg-sky-950 dark:hover:bg-blue-800 transition-all cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              />
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