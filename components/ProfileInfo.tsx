import Link from "next/link";
import { motion } from "framer-motion";
import { BsFillHddStackFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaDiscourse, FaGraduationCap, FaTreeCity } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { IoIosCalendar } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { LuUniversity } from "react-icons/lu";
import { MdOutlineAttachEmail } from "react-icons/md";

const ProfileInfo = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="max-w-3xl mx-auto px-6 text-gray-800 dark:text-gray-200"
      initial="hidden"
      whileInView="show"
      viewport={{ margin: "-50px" }}
      variants={container}
    >
      <motion.h2 
        className="text-2xl font-bold dark:text-white"
        variants={item}
      >
        Full Stack Web Developer.
      </motion.h2>
      
      <motion.p 
        className="italic text-gray-600 dark:text-gray-400 mt-2"
        variants={item}
      >
        MERN Stack consists of MongoDB, Express.js, React.js, and Node.js,
        enabling full-stack JavaScript development for building dynamic and
        scalable web applications.
      </motion.p>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ margin: "-50px" }}
      >
        <motion.p className="flex items-center gap-2" variants={item}>
          <IoIosCalendar className="text-blue-500 dark:text-blue-400" /> 
          <b>Birthday:</b> 10 November 2001
        </motion.p>
        
        <motion.p className="flex items-center gap-2" variants={item}>
          <BsFillHddStackFill className="text-blue-500 dark:text-blue-400" /> 
          <b>Stack:</b> MERN
        </motion.p>
        
        <motion.p className="flex items-center gap-2" variants={item}>
          <LuUniversity className="text-blue-500 dark:text-blue-400" /> 
          <b>University:</b> National University Bangladesh
        </motion.p>
        
        <motion.p className="flex items-center gap-2" variants={item}>
          <FaGraduationCap className="text-blue-500 dark:text-blue-400" /> 
          <b>Study:</b> BBA {"(management)"}
        </motion.p>
        
        <motion.p className="flex items-center gap-2" variants={item}>
          <FaPhoneAlt className="text-blue-500 dark:text-blue-400" /> 
          <b>Phone:</b> +8801729414662
        </motion.p>
        
        <motion.p className="flex items-center gap-2" variants={item}>
          <MdOutlineAttachEmail className="text-blue-500 dark:text-blue-400" /> 
          <b>Email:</b> akash203037@gmail.com
        </motion.p>
        
        <motion.p className="flex items-center gap-2" variants={item}>
          <FaTreeCity className="text-blue-500 dark:text-blue-400" /> 
          <b>Address:</b> Pabna, Bangladesh
        </motion.p>
        
        <motion.p className="flex items-center gap-2" variants={item}>
          <GrStatusGood className="text-blue-500 dark:text-blue-400" /> 
          <b>Availability:</b> Open for work
        </motion.p>
        
        <motion.p className="flex items-center gap-2" variants={item}>
          <FaDiscourse className="text-blue-500 dark:text-blue-400" /> 
          <b>Courses:</b>{" "}
          <Link 
            title="certificate of atikuzzaman" 
            target="_blank"
            href="https://drive.google.com/file/d/1gCsI95gnRjqzbiHbSD3hgW3-CbiupbmT/view?usp=drive_link"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Complete Web Development
          </Link>
        </motion.p>
        
        <motion.p className="flex items-center gap-2" variants={item}>
          <IoLanguage className="text-blue-500 dark:text-blue-400" /> 
          <b>Language:</b> Bangla, English
        </motion.p>
      </motion.div>
      
      <motion.p 
        className="mt-6 text-gray-700 dark:text-gray-300"
        variants={item}
      >
        I am a passionate MERN Stack developer skilled in MongoDB, Express.js,
        React.js, and Node.js. I build scalable, dynamic web applications,
        ensuring high performance, responsiveness, and seamless user experiences
        with modern JavaScript technologies.
      </motion.p>
    </motion.div>
  );
};

export default ProfileInfo;