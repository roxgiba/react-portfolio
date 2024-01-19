import React from "react";

import Image from "next/image";
import home from "../public/home.png";
import gallery from "../public/gallery.png";
import quiz_example2 from "../public/quiz_example2.png";

export default function Project_ArtEscape() {
  return (
    <>
      <div>
        <h3 className="text-4xl py-1 mt-4 dark:text-white">ArtEscape</h3>
        <h3 className="text-sm mb-4 py-1 text-slate-500 dark:text-white">
          <a
            href="https://github.com/roxgiba/ArtEscape"
            target="_blank"
            rel="noopener noreferrer"
          >
            Show the code
          </a>
        </h3>
        <div>
          <p className="text-black text-xl dark:text-white">
            Experience a dynamic, full-stack application meticulously crafted to
            ignite the passion of art enthusiasts across all skill levels. This
            project offers a captivating fusion of interactive gaming
            experiences and immersive art lessons, ensuring an engaging and
            educational journey in the world of art.
          </p>
          <div className="text-slate-600 text-base dark:text-white mt-4">
            For this project, I utilized HTML, JavaScript, React.js,
            React-Router for the front end and MySQL, Node.js, Express.js,
            Database Design, API Integration, and Database Management for the
            back end. I used CSS and Material UI framework for and responsive
            design.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <Image
            src={home}
            alt="project art escape home"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
        <div className="basis-1/3 flex-1">
          <Image
            src={quiz_example2}
            alt="project art escape artist biography"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            className="rounded-lg object-cover shadow-lg"
          />
        </div>

        <div className="basis-1/3 flex-1">
          <Image
            src={gallery}
            alt="project art escape artist biography"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </>
  );
}
