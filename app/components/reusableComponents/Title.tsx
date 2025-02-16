import React, { FC } from "react";

interface TitlePorps {
  title: string;
}

const Title: FC<TitlePorps> = ({ title }) => {
  return (
    <h2 className="font-semibold text-4xl underline underline-offset-[14px] decoration-sky-500">
      {title}
    </h2>
  );
};

export default Title;
