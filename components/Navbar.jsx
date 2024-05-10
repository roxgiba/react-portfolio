import React from "react";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar() {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    // <div className={darkMode ? "dark" : null}>
    <div>
      <nav className="py-10 mb-12 w-full fixed pr-5">
        <ul className="flex justify-end">
          <li>
            {/* <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl dark:text-white"
            /> */}
          </li>
          <li>
            <a
              className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
              href="/Resume_FS.pdf"
              target="_blank"
            >
              Resume
            </a>
            <a
              className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 "
              href="#projects"
            >
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
