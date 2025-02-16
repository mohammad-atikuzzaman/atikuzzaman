"use client";
import React, { FC } from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWriterEffect: FC = () => {
  return (
    <span className="text-sky-500 font-bold">
      <Typewriter
        words={[
          "Front-end Developer",
          "MERN Stack Developer",
          "Full Stack Developer",
          "Web Developer",
        ]}
        loop={0}
        cursor
        cursorStyle=" |"
        typeSpeed={50}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
};

export default TypeWriterEffect;
