"use client";
import { MenuIcon } from "@/assets/icons/MenuIcon";
import { X2Icon } from "@/assets/icons/XIcon";
import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { NameTitle } from "../Titles/NameTitle";

const Navbar = () => {
  const [navbar, setNavbar] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", changeBackground);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={twMerge(
        "flex justify-between fixed w-screen bg-transparent py-[24px] px-[5%] z-20 text-white",
        navbar && "bg-[rgba(11,11,12,0.78)] border-b-[#141415] duration-150 ease-in-out"
      )}
    >
      <div className="text-2xl font-bold">
        <NameTitle href="/" />
      </div>

      <div className="flex items-center gap-5">
        <ul
          ref={menuRef}
          className={twMerge(
            "flex gap-5 lg:flex",
            menuOpen
              ? "flex-col items-start fixed top-0 right-0 w-2/5 h-full bg-[rgba(11,11,12,0.9)] p-12"
              : "hidden lg:flex items-center"
          )}
        >
          <li className="lg:hidden self-end">
            <button onClick={() => setMenuOpen(false)}>
              <X2Icon />
            </button>
          </li>
          <li>
            <a
              href="#about"
              className="text-gradient-hover from-gradient-start to-gradient-end"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#whatIdo"
              className="text-gradient-hover from-gradient-start to-gradient-end"
              onClick={() => setMenuOpen(false)}
            >
              What I Do
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gradient-hover from-gradient-start to-gradient-end"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
          </li>
          {/* <li>
                        <a href="#experience" className="text-gradient-hover from-gradient-start to-gradient-end" onClick={() => setMenuOpen(false)}>
                            Experience
                        </a>
                    </li> */}
          <li>
            <a
              href="#projects"
              className="text-gradient-hover from-gradient-start to-gradient-end"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#certificates"
              className="text-gradient-hover from-gradient-start to-gradient-end"
              onClick={() => setMenuOpen(false)}
            >
              Certifications
            </a>
          </li>
          {/* <li className='w-full lg:w-auto'>
                        <Button Icon={MessageIcon} onClick={openContactFormModal} text='Entre em contacto' className='w-full justify-center lg:w-auto lg:justify-start' />
                    </li> */}
        </ul>

        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
