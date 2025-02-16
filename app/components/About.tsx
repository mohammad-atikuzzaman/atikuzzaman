import React, { FC } from "react";
import Title from "./reusableComponents/Title";
import Image from "next/image";

const About: FC = () => {
  return (
    <div className="mt-12 ml-4 space-y-6">
      <Title title="About"></Title>
      <p className="font-sans text-lg">
        Im a Front End Web developer who is passionate about making{" "}
        <span className="text-sky-500 underline underline-offset-2">
          {" "}
          error-free websites{" "}
        </span>{" "}
        with 100% client satisfaction. I am passionate about learning and
        sharing my knowledge with others as publicly as possible. I love to
        solve real-world problems. I am{" "}
        <span className="text-sky-500 underline underline-offset-2">
          strategic and goal-oriented
        </span>
        , and I always work with an end goal in mind. I pride myself on doing
        quality work and maintaining excellent communication.
      </p>
      <div className="flex">
        <div className="relative w-[300px] h-[300px] bg-gradient-to-r bg-sky-500 hover:from-blue-600 to-blue-900 p-1 rounded-md">
          <Image
            src="/photos/profile.png"
            alt="Profile"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        <section>
          <h3 className="text-2xl font-semibold">MERN Stack Web Developer</h3>
        </section>
      </div>
    </div>
  );
};

export default About;
