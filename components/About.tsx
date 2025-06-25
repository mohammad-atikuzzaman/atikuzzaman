import React, { FC } from "react";
import Title from "./reusableComponents/Title";
import Image from "next/image";
import ProfileInfo from "./ProfileInfo";

const About: FC = () => {
  return (
    <div
      id="about"
      itemScope
      itemProp="description"
      aria-label="About Me"
      className="mt-12 space-y-6 px-4 max-w-screen-xl mx-auto"
    >
      <Title title="About" />
      <p className="text-lg leading-5 font-light text-gray-700 dark:text-gray-300">
        I am a Front End Web developer who is passionate about making{" "}
        <span className="text-sky-500 dark:text-sky-400 underline underline-offset-2">
          error-free websites
        </span>{" "}
        with 100% client satisfaction. I am passionate about learning and
        sharing my knowledge with others as publicly as possible. I love to
        solve real-world problems. I am{" "}
        <span className="text-sky-500 dark:text-sky-400 underline underline-offset-2">
          strategic and goal-oriented
        </span>
        , and I always work with an end goal in mind. I pride myself on doing
        quality work and maintaining excellent communication.
      </p>
      <div className="flex flex-col lg:flex-row items-stretch gap-6">
        <div className="relative w-full lg:w-[30%] bg-gradient-to-r from-sky-500 to-blue-900 dark:from-sky-600 dark:to-blue-800 p-1 rounded-md">
          <Image
            src="/photos/profile.png"
            priority={true}
            alt="Profile"
            width={500}
            height={500}
            className="object-cover w-full h-full rounded-md"
          />
        </div>

        <div className="flex-1">
          <ProfileInfo />
        </div>
      </div>
    </div>
  );
};

export default About;
