"use client";
import React from "react";
import TypedText from "@/components/hero/typed";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const strings = [
    "Frontend Developer",
    "Backend Developer",
    "Web Designer",
    "",
  ];

  const currentYear = new Date().getFullYear();
  const yearsSince2021 = currentYear - 2021;

  return (
    <section
      className={`w-10/12 mx-auto h-screen flex items-center justify-between`}
    >
      <div className={`w-7/12`}>
        <p
          className={`text-4xl font-semibold`}
        >{`Assalomu alaykum 👋. It's Me`}</p>
        <h1
          className={`text-5xl font-bold bg-gradient-to-r from-violet-600 from-40% to-blue-500 text-transparent bg-clip-text py-2`}
        >
          Humoyunbek Tursunniyazov
        </h1>
        <p className={`text-3xl mt-1 font-semibold`}>
          {`And I'm a  `}
          <TypedText
            className={`text-blue-500 font-semibold underline underline-offset-4`}
            strings={strings}
          />
        </p>
        <p className={`mt-10 text-xl font-[500]`}>
          {`I am from Uzbekistan. I have been working as a web developer for ${yearsSince2021} years. Contact me. 24/7 online`}
        </p>
        <div className={`mt-5`}>
          <ul className={`flex items-center space-x-2`}>
            <li>
              <Button variant={"outline"}>
                <i className="bi text-2xl bi-facebook"></i>
              </Button>
            </li>
            <li>
              <Button variant={"outline"}>
                <i className="bi text-2xl bi-instagram"></i>
              </Button>
            </li>
            <li>
              <Button variant={"outline"}>
                <i className="bi text-2xl bi-twitter-x"></i>
              </Button>
            </li>
            <li>
              <Button variant={"outline"}>
                <i className="bi text-2xl bi-telegram"></i>
              </Button>
            </li>
          </ul>
          <Button className={`mt-8 text-xl`}>Download CV</Button>
        </div>
      </div>
      <div className={`w-5/12 relative flex items-center justify-center`}>
        <div
          className={`absolute w-[100px] left-10 border-black border shadow-md shadow-violet-600 top-10 -z-10 h-[100px] bg-violet-700 rounded-full flex items-center justify-center`}
        >
          <p className={`text-5xl -rotate-45`}>😎</p>
        </div>
        <div
          className={`absolute w-[100px] right-0 border-black border shadow-md shadow-violet-600 top-10 -z-10 h-[100px] bg-violet-700 rounded-full flex items-center justify-center`}
        >
          <p className={`text-5xl`}>🎉</p>
        </div>
        <div
          className={`absolute w-[100px] -bottom-10  border-black border shadow-md shadow-violet-600  h-[100px] bg-violet-700 rounded-full flex items-center justify-center`}
        >
          <p className={`text-5xl`}>💻</p>
        </div>
        <div
          className={`rounded-full bg-blue-500 border w-[400px] h-[400px] border-black shadow-lg shadow-blue-500`}
        ></div>
      </div>
    </section>
  );
};

export default HomePage;
