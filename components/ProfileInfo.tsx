import { motion } from "framer-motion";
import { BsFillHddStackFill } from "react-icons/bs";
import { FaDiscourse, FaGraduationCap, FaTreeCity } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { IoIosCalendar } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { LuUniversity } from "react-icons/lu";

const ProfileInfo = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
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
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto text-gray-800 dark:text-gray-200"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
    >
      <motion.h2
        className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Personal Info */}

        <motion.div
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300"
          variants={item}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl shadow-md">
            <BsFillHddStackFill className="text-white text-lg" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Stack
            </h3>
            <p className="text-base font-semibold">MERN</p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300"
          variants={item}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl shadow-md">
            <FaDiscourse className="text-white text-lg" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Freelance
            </h3>
            <p className="text-base font-semibold flex items-center gap-1">
              Available <GrStatusGood className="text-green-500" />
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300"
          variants={item}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl shadow-md">
            <LuUniversity className="text-white text-lg" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              University
            </h3>
            <p className="text-base font-semibold">
              National University Bangladesh
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300"
          variants={item}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl shadow-md">
            <FaGraduationCap className="text-white text-lg" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Degree
            </h3>
            <p className="text-base font-semibold">BBA (Management)</p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300"
          variants={item}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl shadow-md">
            <IoLanguage className="text-white text-lg" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Languages
            </h3>
            <p className="text-base font-semibold">Bangla, English</p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300"
          variants={item}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl shadow-md">
            <IoIosCalendar className="text-white text-lg" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Date of Birth
            </h3>
            <p className="text-base font-semibold">November 10, 2001</p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300"
          variants={item}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl shadow-md">
            <FaTreeCity className="text-white text-lg" />
          </div>
          <div>
            <h3 className="text-sm text-gray-500 dark:text-gray-400 font-medium">
              Address
            </h3>
            <p className="text-base font-semibold">Pabna, Bangladesh</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileInfo;
