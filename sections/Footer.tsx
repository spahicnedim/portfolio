import React from "react";
import Link from "next/link";
import { socialImgs } from "@/constants";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='flex flex-col justify-center md:items-start items-center'>
          <Link href='/' className='text-transparent'>
            Visit my blog
          </Link>
        </div>

        <div className='socials'>
          {socialImgs.map((img) => (
            <Link
              key={img.name}
              href={img.url}
              className='icon'
              target='_blank'
            >
              <Image src={img.imgPath} alt={img.name} width={20} height={20} />
            </Link>
          ))}
        </div>

        <div className='flex flex-col justify-center'>
          <p className='text-center md:text-end'>
            © {new Date().getFullYear()} - Nedim Spahić. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
