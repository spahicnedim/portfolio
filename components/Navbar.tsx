"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <Link href="#hero" className="logo">
          Nedim Spahić
        </Link>

        <nav className="desktop">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name} className="group">
                <Link href={link.link}>
                  <span>{link.name}</span>
                  <span className="underline" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
