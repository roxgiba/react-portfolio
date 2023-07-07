import "tailwindcss/tailwind.css";
import Head from "next/head";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import graduation from "../public/graduation.jpg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Roxana Giba Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons"> Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                {" "}
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Roxana Giba
            </h2>
            <h3 className="text-2xl py-2">Full Stack Developer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              I am a web developer and I am customer satisfaction oriented. I am
              energetic and enthusiast, and also practical and respectful. As a
              customer support specialist I care about the needs of the client
              and their satisfaction. I believe that with my past experiences
              and my new skills as a web developer I can help companies to
              understand and fulfil the necessities of the their clients.
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image
              src={graduation}
              alt="picture of my graduation"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
}