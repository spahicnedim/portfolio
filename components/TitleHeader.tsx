import React from "react";

interface Props {
  title: string;
  sub?: string;
}

const TitleHeader = ({ title, sub }: Props) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <div className="font-semibold md:text-5xl text-3xl text-center">
        {title}
      </div>
    </div>
  );
};
export default TitleHeader;
