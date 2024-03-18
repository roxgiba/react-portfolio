import React from "react";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Project_Coaching from "../components/Project_Coaching";
import Project_ArtEscape from "../components/Project_ArtEscape";

function Main() {
  return (
    <main className=" bg-amber-100 pt-20 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      <section className=" min-h-screen">
        <div id="about" className="text-center p-10 relative">
          <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
            Roxana Giba
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
            Full Stack Web Developer.
          </h3>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 shadow-2xl rounded-full w-60 h-60 mt-10 mb-10 overflow-hidden md:h-96 md:w-96">
            <Image
              src="/profile_image.jpeg"
              alt="profile picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-lg mx-auto dark:text-white">
            As a client-focused web developer, I bring energy, enthusiasm, and
            practicality to every project. With a background in customer support
            and a passion for exceptional user experiences, I am skilled at
            understanding and fulfilling client needs.{" "}
          </p>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-lg  mx-auto dark:text-white">
            If you are seeking a dedicated freelance web developer to bring your
            digital projects to life, I invite you to explore my portfolio and
            connect with me to discuss how I can assist you in achieving your
            online goals.
          </p>
          <p className="text-2xl dark:text-white">
            Let me help you create captivating websites and optimize customer
            satisfaction.
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-800 dark:text-white cursor-pointer">
          <a href="https://www.linkedin.com/in/roxana-giba" target="_blank">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/roxgiba" target="_blank">
            <AiFillGithub />
          </a>
        </div>
      </section>

      <section>
        <div className="text-center">
          <h3 className="text-5xl p-10 mt-4 text-teal-600">Skills</h3>
          <p className="text-xl py-2 leading-8 text-gray-800 mb-8 dark:text-white">
            I have a solid understanding of{" "}
            <span className="text-xl font-medium">
              HTML, CSS, JavaScript, React, Express, and Tailwind CSS.
            </span>{" "}
            With my skills in both front-end and back-end development, I am
            capable of building and designing responsive web applications.
            Skilled in collaborating within multidisciplinary Agile teams and
            using a range of development tools. Strong communication,
            problem-solving abilities, and proficiency in English.
          </p>
        </div>

        <div className="lg:flex flex-row justify-center  gap-10">
          <div className=" bg-white text-center shadow-lg p-5 rounded-xl my-2 dark:bg-slate-200">
            {/* <Image src={design} alt="figma logo" width={100} height={100} /> */}
            <h3 className="text-2xl font-medium pt-8 pb-2">
              Beautiful designs
            </h3>
            <p className="py-2">
              Creating elegant design suited for the needs of our clients.
            </p>
            <h4 className="py-4 text-xl text-teal-600 ">Design Tools</h4>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">Trello</p>
            <p className="text-gray-800 py-1">CSS</p>
            <p className="text-gray-800 py-1">Bootstrap</p>
            <p className="text-gray-800 py-1">Tailwind CSS</p>
            <p className="text-gray-800 py-1">Material UI</p>
            <p className="text-gray-800 py-1">DaisyUI</p>
          </div>

          <div className=" bg-white text-center items-center shadow-lg p-5 rounded-xl my-2 dark:bg-slate-200">
            <h3 className="text-2xl font-medium pt-8 pb-2">Clean code</h3>
            <p className="py-2">
              Creating intuitive websites using the best practices and SOLID
              principles.
            </p>
            <h4 className="py-4 text-xl text-teal-600">Tech Stack</h4>
            <p className="text-gray-800 py-1">React</p>
            <p className="text-gray-800 py-1">Next.js</p>
            <p className="text-gray-800 py-1">Vue.js</p>
            <p className="text-gray-800 py-1">Node.js</p>
            <p className="text-gray-800 py-1">Express</p>
            <p className="text-gray-800 py-1">Next.js</p>
            <p className="text-gray-800 py-1">MySQL</p>
          </div>
        </div>
      </section>

      <section id="projects">
        <div>
          <h3 className="text-5xl p-10 mt-4 text-teal-600   text-center">
            Projects
          </h3>
        </div>
      </section>
      <Project_Coaching />
      <Project_ArtEscape />
    </main>
  );
}

export default Main;
