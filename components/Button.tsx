import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  text: string;
  className?: string;
  id?: string;
}

const Button = ({ text, className, id }: Props) => {
  return (
    <Link
      className={`${className ?? ""} cta-wrapper`}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById("counter");

        if (target && id) {
          const offset = window.innerHeight * 0.15;

          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top: top, behavior: "smooth" });
        }
      }}
    >
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
