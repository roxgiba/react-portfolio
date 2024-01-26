import React from "react";
import { useState } from "react";
import "tailwindcss/tailwind.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : null}>
      <div className="bg-slate-600 text-white text-3xl text-center p-14 dark:bg-gray-900">
        Let&apos;s work together...
        <div className="text-5xl flex justify-center gap-16 p-14 text-white dark:text-white cursor-pointer">
          <a href="https://www.linkedin.com/in/roxana-giba" target="_blank">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/roxgiba" target="_blank">
            <AiFillGithub />
          </a>
        </div>
        <p className="text-lg">
          {" "}
          © - Professional Portfolio Roxana Giba - 2024
        </p>
      </div>
    </div>
  );
}
