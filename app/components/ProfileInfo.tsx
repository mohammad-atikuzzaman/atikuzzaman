import React from "react";
import { BsFillHddStackFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGraduationCap, FaTreeCity } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { IoIosCalendar } from "react-icons/io";
import { LuUniversity } from "react-icons/lu";
import { MdOutlineAttachEmail } from "react-icons/md";

const ProfileInfo = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 text-gray-800">
      <h2 className="text-2xl font-bold">
       Full Stack Web Developer.
      </h2>
      <p className="italic text-gray-600 mt-2">
      MERN Stack consists of MongoDB, Express.js, React.js, and Node.js, enabling full-stack JavaScript development for building dynamic and scalable web applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <p className="flex items-center gap-2">
          <IoIosCalendar className="text-blue-500" /> <b>Birthday:</b> 10 November 2001
        </p>
        <p className="flex items-center gap-2">
          <BsFillHddStackFill className="text-blue-500" /> <b>Stack:</b> MERN
        </p>
        <p className="flex items-center gap-2">
          <LuUniversity className="text-blue-500" /> <b>University:</b> National University Bangladesh
        </p>
        <p className="flex items-center gap-2">
          <FaGraduationCap className="text-blue-500" /> <b>Studay:</b> BBA {"(management)"}
        </p>
        <p className="flex items-center gap-2">
          <FaPhoneAlt className="text-blue-500" /> <b>Phone:</b> +8801729414662
        </p>
        <p className="flex items-center gap-2">
          <MdOutlineAttachEmail className="text-blue-500" /> <b>Email:</b> akash203037@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <FaTreeCity className="text-blue-500" /> <b>Address:</b> Pabna, Bangladesh
        </p>
        <p className="flex items-center gap-2">
          <GrStatusGood className="text-blue-500" /> <b>Freelance:</b> Available
        </p>
      </div>
      <p className="mt-6 text-gray-700">
      I am a passionate MERN Stack developer skilled in MongoDB, Express.js, React.js, and Node.js. I build scalable, dynamic web applications, ensuring high performance, responsiveness, and seamless user experiences with modern JavaScript technologies.
      </p>
    </div>
  );
};

export default ProfileInfo;
