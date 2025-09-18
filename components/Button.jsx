import React from "react";
import Link from "next/link";
import Image from "next/image";

const Button = ({ text, className, id }) => {
  return (
    <Link className={`${className ?? ""} cta-wrapper`} href="#">
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <Image
            src="/images/arrow-down.svg"
            alt="arrow"
            width={500}
            height={500}
          />
        </div>
      </div>
    </Link>
  );
};
export default Button;
