import React from "react";
import Image from "next/image";
import { VscArrowCircleRight } from "react-icons/vsc";
import browser from "../public/browser.png";
import coaching_webView from "../public/coaching_webView.png";
import coaching_mobileView from "../public/coaching_mobileView.png";
import coaching_mobileView2 from "../public/coaching_mobileView2.png";

export default function Project_Coaching() {
  return (
    <div>
      <div className="flex items-center dark:text-white">
        <h3 className="text-4xl py-1 mt-4 dark:text-white">Valeria Coaching</h3>
        <a
          href="https://valeria-coaching.vercel.app/"
          target="_blank"
          className="text-2xl ml-2	"
        >
          <VscArrowCircleRight />
        </a>
      </div>
      <h3 className="text-sm py-1 mb-4 text-slate-500 dark:text-white">
        <a
          href="https://github.com/roxgiba/valeria-coaching"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show the code
        </a>
      </h3>
      <div>
        <p className="text-black text-xl dark:text-white">
          I created this website for a client who just graduated from the{" "}
          <span>
            <a
              href="https://coachingfederation.org/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              Coaching Federation (ICF)
            </a>
          </span>{" "}
          in Barcelona. She needed a webpage that allows her to introduce
          herself, what coaching is and what services she provides. I added a
          calendar that allows for bookings.
        </p>{" "}
        <p className="text-slate-600 text-base dark:text-white mt-4">
          For this project, I utilized JavaScript as the primary programming
          language, leveraging the Next.js framework for building a
          high-performance web application. I also played a pivotal role in
          crafting an engaging user experience by applying CSS and utilizing the
          Tailwind CSS framework for streamlined and responsive design.
        </p>
      </div>
      <div className="flex justify-center flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="">
          <Image
            src={coaching_mobileView}
            alt="project coaching mobile view"
            width={"80%"}
            height={"80%"}
            layout="responsive"
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="">
          <Image
            src={coaching_mobileView2}
            alt="project coaching mobile view dropdown"
            width={"80%"}
            height={"80%"}
            layout="responsive"
            className="rounded-lg object-cover shadow-lg"
          />
        </div>

        <div className="basis-1/3 flex-1">
          <Image
            src={coaching_webView}
            alt="project coaching web view"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
