import ThreeDCardDemo from "@/components/ThreeDCardDemo";
import React, { FC } from "react";
import Title from "./reusableComponents/Title";

const Projects: FC = () => {
  return (
    <section id="projects" className="max-w-screen-xl mx-auto mt-12 px-4">
      <Title title="Projects" />
      <p className="mt-8">The Projects Thats I have completed</p>
      <div className="grid md:grid-cols-2  gap-4 pt-12 ">
        <ThreeDCardDemo
          title="ChatVibe"
          description="a video conferencing app"
          url="https://chat-vibe-ashy.vercel.app/"
          img="/photos/chatvibe.png"
          github="https://github.com/mohammad-atikuzzaman/-chatvibe"
        />
        <ThreeDCardDemo
          title="Mega Newss"
          description="Article sharing platform"
          url="https://meganewsss.web.app/"
          img="/photos/megaNewss.png"
          github="https://github.com/mohammad-atikuzzaman/mega-news"
        />
        <ThreeDCardDemo
          title="ChatVibe"
          description="a video conferencing app"
          url="https://vibe-palace.web.app/"
          img="/photos/vibePalace.png"
          github="https://github.com/mohammad-atikuzzaman/vibePalace"
        />
      </div>
    </section>
  );
};

export default Projects;
