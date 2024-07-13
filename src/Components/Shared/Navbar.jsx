"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle click outside of menu to close it
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  // Add and remove event listener for clicking outside the menu
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="bg-[#091202] relative z-10 font-raleway">
        <nav className="navbar z-50 text-[#88A9C3] mx-auto pt-5 font-montserrat px-4 max-w-[1420px]">
          <div className="navbar-start">
            <a href="#home">
              <Image
                className="xl:h-16 2xl:h-20 w-auto"
                height="98"
                width="203"
                src="https://i.ibb.co/zXLmZ5r/Frame-1000008084.png"
                alt="Tech Plato Logo"
              />
            </a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {[
                "Home",
                "About Me",
                "Services",
                "Listing",
                "Guideline",
                "Contact",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className="text-[#88A9C3] hover:text-white xl:text-xl 2xl:text-2xl font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end flex items-center">
            <button className="bg-[#F3E3E2] xl:px-5 xl:py-2 2xl:px-6 2xl:py-3 rounded-lg text-[#091235] font-medium text-2xl font-roboto">
              Get In Touch
            </button>

            <div className="lg:hidden" ref={menuRef}>
              <button
                className="bg-[#e6e6e6] p-2 rounded-xl focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 sm:w-10 h-6 sm:h-10"
                >
                  <path
                    className={!menuOpen ? "block" : "hidden"}
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path
                    className={menuOpen ? "block" : "hidden"}
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {menuOpen && (
                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-md rounded-box w-52 sm:w-60 bg-[#e6e6e6]">
                  {[
                    "Home",
                    "About Me",
                    "Services",
                    "Listing",
                    "Guideline",
                    "Contact",
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href={`#${item.toLowerCase().replace(" ", "")}`}
                        className="text-secondary text-xl sm:text-3xl sm:mt-3 mt-1"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
