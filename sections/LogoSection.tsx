import React from "react";
import { logoIconsList } from "@/constants";
import Image from "next/image";

interface Props {
  icon: {
    imgPath: string;
  };
}

const LogoIcon = ({ icon }: Props) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <Image src={icon.imgPath} alt="compay logos" width={500} height={500} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-22">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}

          {logoIconsList.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default LogoSection;
