"use client";

import { useRouter } from "next/navigation";

const Footer = () => {
  const date = new Date().getFullYear();
  const router = useRouter();

  return (
    <div className={`border-t w-full py-5 flex justify-center items-center`}>
      <p>
        {date}. Made by{" "}
        <span
          onClick={() => router.push("/")}
          className={`text-violet-400 underline underline-offset-4 cursor-pointer`}
        >
          Humoyun.dev
        </span>
      </p>
    </div>
  );
};

export default Footer;
