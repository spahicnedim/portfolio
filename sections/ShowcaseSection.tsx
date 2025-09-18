"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section ref={sectionRef} id='work' className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* LEFT */}
          <div ref={project1Ref} className='first-project-wrapper'>
            <div className='image-wrapper'>
              <Image
                src='/images/sjednica.png'
                alt='project1'
                width={1000000000}
                height={1000000000}
              />
            </div>
            <div className='text-content'>
              <h2>Sjednica.ba Municipality Session Management System</h2>
              <p className='text-white-50 md:text-xl mt-2'>
                A custom-built web application designed to streamline the
                organization and execution of municipal council sessions. The
                system enables administrators to initiate structured debates for
                each agenda item, while participants can register to speak using
                formal categories such as discussion, clarification, response,
                and procedural violation.
                <br />
                <br />
                Built with modern technologies including Next.js, Appwrite, and
                TailwindCSS, the platform supports real-time updates, role-based
                permissions, and dynamic speaking time limits per municipality.
                This ensures sessions are conducted transparently and in full
                compliance with local regulations. <br />
                This project is built purposefully for municipalities in Bosnia
                and Herzegovina. <br />
                You can visit it at{" "}
                <Link href='https://sjednica.ba' className='underline'>
                  sjednica.ba
                </Link>{" "}
                and you can login with: email: demovijecnik@gmail.com; password:
                demovijecnik123 <br />
                to check what the app is all about.
              </p>
            </div>
          </div>

          {/* RGHT */}
          <div className='project-list-wrapper overflow-hidden'>
            <div ref={project2Ref} className='project'>
              <div className='image-wrapper bg-[#9eb9c1]'>
                <Image
                  src='/images/Knjigovodstvo.png'
                  alt='Accounting System for Bookkeeping Services'
                  width={1000000000}
                  height={1000000000}
                />
              </div>
              <h2>Accounting System for Bookkeeping Services</h2>
              <p className='text-white-50 md:text-xl mt-2'>
                A custom web application developed to simplify and automate the
                workflow of bookkeeping firms. The platform provides
                comprehensive document and inventory management, including
                KIF/KUF document processing, warehouse operations, client and
                vendor modules, and PDF export functionality. <br /> <br />{" "}
                Built with modern technologies such as React, Node.js, and
                PostgreSQL, the system ensures secure data handling, efficient
                operations, and a seamless user experience. <br /> Soon there
                will be a public demo, for now you can check my github to see
                more
              </p>
            </div>
            <div ref={project3Ref} className='project'>
              <div className='image-wrapper bg-[#ffe7eb]'>
                <Image
                  src='/images/project3.png'
                  alt='YC Directory'
                  width={500}
                  height={500}
                />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
              <p className='text-white-50 md:text-xl mt-2'>
                A sleek platform built with Next.js 15 and React 19 where
                entrepreneurs can submit and explore startup ideas. Features
                include GitHub login, multimedia pitch submissions, editor’s
                picks, search and filtering, and dynamic content powered by
                Sanity. Designed with a minimalistic UI for a smooth and modern
                user experience. You can check it{" "}
                <Link
                  href='https://yc-directory-ruddy.vercel.app/'
                  className='underline'
                >
                  here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ShowcaseSection;
