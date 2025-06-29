import Title from "@/components/reusableComponents/Title";
import ThreeDCardDemo from "@/components/ThreeDCardDemo";
import React from "react";

const page = () => {
  return (
    <section
      id="projects"
      aria-label="Projects Portfolio"
      itemScope
      itemType="https://schema.org/CreativeWork"
      className="max-w-screen-xl mx-auto mt-12 px-4"
    >
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
          title="CodeAtik Agent"
          description="Ai powered website builder"
          url="https://codeatikagent.netlify.app/"
          img="/photos/codeatik.png"
          github="https://github.com/mohammad-atikuzzaman/code-atik-frontend"
        />
        <ThreeDCardDemo
          title="ArmyCamp Location"
          description="Emergency contacts and location of bd army."
          url="https://armycamplocation.netlify.app/"
          img="/photos/armycamp.png"
          github="https://github.com/mohammad-atikuzzaman/armycamplocation"
        />
        <ThreeDCardDemo
          title="FBN Pabna"
          description="Blood Donation network site for local area."
          url="https://fbn-pabna.netlify.app/ "
          img="/photos/fbnpabna.png"
          github="https://github.com/mohammad-atikuzzaman/faridpurbloodnetwork"
        />
        <ThreeDCardDemo
          title="Mega Newss"
          description="Article sharing platform"
          url="https://meganewsss.web.app/"
          img="/photos/megaNewss.png"
          github="https://github.com/mohammad-atikuzzaman/mega-news"
        />
        <ThreeDCardDemo
          title="Vibe Palace"
          description="Comprehensive room booking platform."
          url="https://vibe-palace.web.app/"
          img="/photos/vibePalace.png"
          github="https://github.com/mohammad-atikuzzaman/vibePalace"
        />
      </div>
    </section>
  );
};

export default page;
