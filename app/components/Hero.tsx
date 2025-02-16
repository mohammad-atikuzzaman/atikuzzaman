import React, { FC } from "react";
import { Orbitron } from "next/font/google";
export const orbitron = Orbitron({ subsets: ["latin"] });

const Hero: FC = () => {
  return (
    <div
      className="w-full relative flex items-center justify-center bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('/photos/atikuzzaman.png')",
      }}
    >
      <div
        className={`${orbitron.className} bg-black bg-opacity-50 w-full h-full flex flex-col justify-center items-start p-6 md:p-12`}
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          Md Atikuzaman
        </h1>
        <p className="text-gray-300 text-xl md:text-2xl mt-4">
          Im <span className="text-blue-400">Freelancer</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
