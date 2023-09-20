import React from "react";
import { github } from "../assets";
import { insta } from "../assets";
import { sectionWrapper } from "../hoc";

const Creator = () => {
  return (
    <>
      <hr className="max-w-7xl h-0.5 mx-auto bg-gray-600 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <div className="flex flex-row justify-center items-center gap-3  mb-5">
        <img
          onClick={() => window.open("https://github.com/spahicnedim", "blank")}
          src={github}
          alt="github"
          className="w-11 h-11 object-contain cursor-pointer"
        />
        <img
          onClick={() =>
            window.open("https://www.instagram.com/_nedimspahic_/", "blank")
          }
          src={insta}
          alt="instagram"
          className="w-10 h-10 object-contain cursor-pointer"
        />
      </div>
      <p className="sm:text-[16px] text-[12px] text-secondary tracking-wider justify-center items-center flex pb-8">
        Made by @spahicnedim
      </p>
    </>
  );
};

export default Creator;
