import React from "react";
import Image from "next/image";
import { VscArrowCircleRight } from "react-icons/vsc";
import browser from "../public/browser.png";
import nature1 from "../public/nature1.png";
import nature2 from "../public/nature2.png";
import nature3 from "../public/nature3.png";
import nature4 from "../public/nature4.png";

export default function Project_Coaching() {
  return (
    <div>
      <div className="flex items-center dark:text-white">
        <h3 className="text-4xl py-1 mt-4 dark:text-white"> 💚 NatureList</h3>

        <a
          href="https://nextjs-ecommerce-roxgiba.vercel.app/"
          target="_blank"
          className="text-2xl ml-2	"
        >
          <span className="text-xs ml-2">visit</span>
          <VscArrowCircleRight className=" ml-2" />
        </a>
      </div>
      <h3 className="text-sm py-1 mb-4 text-slate-500 dark:text-white">
        <a
          href="https://github.com/roxgiba/nextjs-ecommerce"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show the code
        </a>
      </h3>
      <div>
        <p className="text-black text-xl dark:text-white">
          I created this website for a client who just started a business
          selling natural products in Barcelona. <br />
          They needed a web page to share the products and the new entries to
          gain visibility online.
        </p>
        <p className="text-slate-600 text-base dark:text-white mt-4">
          This project combines the power of Next.js, Prisma, Next-Auth,
          MongoDB, and TailwindCSS to create a robust and secure online shopping
          experience.
        </p>
      </div>
      <div className="flex justify-center flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <Image
            src={nature3}
            alt="project coaching mobile view"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={nature2}
            alt="project coaching mobile view dropdown"
            width={"80%"}
            height={"80%"}
            layout="responsive"
            className="rounded-lg object-cover shadow-lg"
          />
        </div>

        <div className="basis-1/3 flex-2">
          <Image
            src={nature1}
            alt="project coaching web view"
            width={"40%"}
            height={"40%"}
            layout="responsive"
            className="rounded-lg object-contain shadow-lg"
          />
        </div>
        <div className="basis-1/3 flex-2">
          <Image
            src={nature4}
            alt="project coaching web view"
            width={"40%"}
            height={"40%"}
            layout="responsive"
            className="rounded-lg object-contain shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
