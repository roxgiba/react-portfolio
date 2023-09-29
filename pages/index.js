import "tailwindcss/tailwind.css";
import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import home from "../public/home.png";
import gallery from "../public/gallery.png";
import quiz_example2 from "../public/quiz_example2.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : null}>
      <Head>
        <title>Roxana Giba - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-amber-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl py-2 text-teal-600 font-medium md:text-6xl">
              {" "}
              Welcome to my Portfolio
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                {" "}
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="/Tech CV 2023.pdf"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Roxana Giba
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Full Stack Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-lg max-w-xl mx-auto dark:text-white">
              As a client-focused web developer, I bring energy, enthusiasm, and
              practicality to every project. With a background in customer
              support and a passion for exceptional user experiences, I&apos;m
              skilled at understanding and fulfilling client needs.
            </p>
            <p className="text-xl dark:text-white">
              Let me help you create captivating websites and optimize customer
              satisfaction.
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <a href="https://www.linkedin.com/in/roxana-giba" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/roxgiba" target="_blank">
              <AiFillGithub />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image
              src="/profile_image.jpeg"
              alt="picture of my graduation"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        <section>
          <div className="text-center">
            <h3 className="text-5xl p-10 mt-4 dark:text-white">Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I have a solid understanding of{" "}
              <span className="text-xl font-medium">
                HTML, CSS, JavaScript, React, Express, and Tailwind CSS.
              </span>{" "}
              With my skills in both front-end and back-end development, I am
              capable of building and designing responsive web applications.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className=" bg-white text-center shadow-lg p-10 rounded-xl my-2 dark:bg-white">
              {/* <Image src={design} alt="figma logo" width={100} height={100} /> */}
              <h3 className="text-2xl font-medium pt-8 pb-2">
                Beautiful designs
              </h3>
              <p className="py-2">
                Creating elegant design suited for the needs of our clients.
              </p>
              <h4 className="py-4 text-xl text-teal-600">Design Tools</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
              <p className="text-gray-800 py-1">Material UI</p>
            </div>

            <div className=" bg-white text-center items-center shadow-lg p-10 rounded-xl my-2 dark:bg-white">
              {/* <Image
                src={code}
                alt="code screen"
                width={100}
                height={100}
              /> */}
              <h3 className="text-2xl font-medium pt-8 pb-2">Clean code</h3>
              <p className="py-2">
                Creating intuitive websites using the best practices and SOLID
                principles.
              </p>
              <h4 className="py-4 text-xl text-teal-600">Tech Stack</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">Express</p>
              <p className="text-gray-800 py-1">Next.js</p>
              <p className="text-gray-800 py-1">MySQL</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-5xl p-10 mt-4 dark:text-white text-center">
              Projects
            </h3>
            <h3 className="text-3xl py-1 mt-4 dark:text-white">ArtEspace</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={home}
                alt="project art escape home"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={quiz_example2}
                alt="project art escape artist biography"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>

            <div className="basis-1/3 flex-1">
              <Image
                src={gallery}
                alt="project art escape artist biography"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
