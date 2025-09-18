"use client";

import React from "react";
import Image from "next/image";
import { words } from "@/constants";
import Button from "@/components/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedCounter from "@/components/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <section id='hero' className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'>
        <Image src='/images/bg.png' alt='background' width={500} height={500} />
      </div>

      <div className='hero-layout'>
        {/* LEFT: Hero Content */}
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
          <div className='flex flex-col gap-7'>
            <div className='hero-text'>
              <h1>
                Shaping
                <span className='slide'>
                  <span className='wrapper'>
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className='flex items-center md:gap-3 gap-1 pb-2'
                      >
                        <Image
                          src={word.imgPath}
                          alt={word.text}
                          className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                          width={500}
                          height={500}
                        />

                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
              Hi, I&#39;m Nedim, a software engineer based in Bosnia and
              Herzegovina.
              {/*with a passion for code.*/}
            </p>
            <Button
              className='md:w-80 md:h-16 w-60 h-12'
              id='button'
              text='See my Work'
            />
          </div>
        </header>

        {/* RIGHT: 3D MODEL */}
        <div className='absolute bottom-0 right-0 z-10'>
          <Image
            src='/images/bg.png'
            alt='background'
            width={500}
            height={500}
          />
        </div>
      </div>

      <AnimatedCounter />
    </section>
  );
};
export default Hero;
