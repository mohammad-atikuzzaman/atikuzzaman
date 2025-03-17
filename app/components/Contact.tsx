"use client";

import { useRef, FormEvent, ReactNode } from "react";
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
    <div
      id="contact"
      aria-label="Contact Information"
      itemScope
      itemType="https://schema.org/ContactPoint"
      className="bg-sky-50"
    >
      <div className="px-4 py-12 rounded-xl md:flex justify-between gap-8 w-full max-w-screen-xl mx-auto">
        <div className="mb-4 md:w-[30%]">
          <Title title="Contact" />
          <div id="map">
            {/* <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Pabna,Bangladesh`}
            ></iframe> */}
          </div>
        </div>
        <div className="md:w-[70%]">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Contact Info</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ContactInfo
                icon={<FaMobile />}
                label="Phone_"
                value="+8801729414662"
                link="tel:+8801729414662"
              />
              <ContactInfo
                icon={<FaLocationArrow />}
                label="Location_"
                value="Pabna, Bangladesh"
              />
              <ContactInfo
                icon={<FaEnvelope />}
                label="Email_"
                value="akash203037@gmail.com"
                link="mailto:akash203037@gmail.com"
              />
              <ContactInfo
                icon={<FaGithub />}
                label="Github_"
                value="mohammad-atikuzzaman"
                link="https://github.com/mohammad-atikuzzaman"
              />
              <ContactInfo
                icon={<FaLinkedin />}
                label="LinkedIn"
                value="matikuzzaman/"
                link="https://www.linkedin.com/in/matikuzzaman/"
              />
              <ContactInfo
                icon={<FaFacebook />}
                label="Facebook"
                value="mohammadakash20"
                link="https://www.facebook.com/mohammadakash20"
              />
            </div>
          </div>
          <br />
          <hr className="bg-slate-800 border-slate-800" />
          <div>
            <h2 className="font-semibold text-2xl my-3">Send me Mail</h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-3 text-sky-900"
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
              <input
                type="submit"
                value="Send"
                className=" bg-sky-900 text-white w-full font-bold border-b-sky-700 border-b-[3px] hover:bg-sky-950 transition-all"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
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
  <div className="flex items-center gap-2">
    {icon}
    <div>
      <p>{label}</p>
      {link ? (
        <a href={link} className="text-sm">
          {value}
        </a>
      ) : (
        <h4 className="">{value}</h4>
      )}
    </div>
  </div>
);

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const InputField = ({ label, name, type, placeholder }: InputFieldProps) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <br />
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full p-2 font-semibold rounded-md border-2 border-sky-900"
      required
    />
  </div>
);

interface TextareaFieldProps {
  label: string;
  name: string;
  placeholder: string;
}

const TextareaField = ({ label, name, placeholder }: TextareaFieldProps) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <br />
    <textarea
      name={name}
      placeholder={placeholder}
      className="w-full p-2 font-semibold rounded-md border-2 border-sky-900"
      required
    ></textarea>
  </div>
);
