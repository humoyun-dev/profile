"use client";
import React from "react";
import Image from "next/image";
import { ThemeMode } from "@/components/dropdowns/theme-mode";
import { usePathname, useRouter } from "next/navigation";
import Link2 from "@/components/navigation/link";

const Navbar: React.FC = () => {
  const path = usePathname();
  const router = useRouter();
  return (
    <div
      className={`py-3 border-b dark:bg-black bg-white/70 backdrop-blur-md fixed w-full z-[999] top-0`}
    >
      <div className={`w-9/12 mx-auto flex items-center justify-between`}>
        <div
          className={`flex items-center space-x-2 cursor-pointer`}
          onClick={() => router.push("/")}
        >
          <Image
            src={`/logo.png`}
            alt={"logo"}
            width={50}
            height={50}
            className={`rounded-full`}
          />
          <p className={`text-3xl underline underline-offset-8 font-bold`}>
            Humoyun.dev
          </p>
        </div>
        <ul className={`flex items-center justify-between space-x-2`}>
          <li>
            <Link2 href={"/"} path={path}>
              Home
            </Link2>
          </li>
          <li>
            <Link2 href={"/about"} path={path}>
              About
            </Link2>
          </li>
          <li>
            <Link2 href={"/blog"} path={path}>
              Blog
            </Link2>
          </li>
          <li>
            <ThemeMode />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
