import React from "react";
import { github } from "../assets";
import { insta } from "../assets";

const Creator = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center gap-3">
        <img
          onClick={() => window.open("https://github.com/", "blank")}
          src={github}
          alt="github"
          className="w-11 h-11 object-contain cursor-pointer mb-5"
        />
        <img
          onClick={() => window.open("https://instagram.com/", "blank")}
          src={insta}
          alt="instagram"
          className="w-10 h-10 object-contain cursor-pointer mb-5"
        />
      </div>
      <p className="pb-12 sm:text-[16px] text-[12px] text-secondary tracking-wider justify-center items-center flex">
        Made by @spahicnedim
      </p>
    </>
  );
};

export default Creator;
