"use client";
import React from "react";
import CustomImage from "@/components/media/image";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BlogCard from "@/components/card/blog-card";
import Breadcrumbs from "@/components/navigation/breadcrumbs";

const data = {
  id: 5,
  title: "What is Lorem Ipsum?",
  slug: "what-is-lorem-ipsum",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  date: "Dec 23, 2023",
};

const data2 = [
  {
    id: 1,
    title: "What is Lorem Ipsum?",
    slug: "what-is-lorem-ipsum",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "Dec 23, 2023",
  },
  {
    id: 2,
    title: "What is Lorem Ipsum?",
    slug: "what-is-lorem-ipsum",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "Dec 23, 2023",
  },
  {
    id: 3,
    title: "What is Lorem Ipsum?",
    slug: "what-is-lorem-ipsum",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "Dec 23, 2023",
  },
  {
    id: 4,
    title: "What is Lorem Ipsum?",
    slug: "what-is-lorem-ipsum",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "Dec 23, 2023",
  },
  {
    id: 5,
    title: "What is Lorem Ipsum?",
    slug: "what-is-lorem-ipsum",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "Dec 23, 2023",
  },
];

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const links = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "blog",
      href: "/blog",
    },
    {
      name: params.slug,
      href: params.slug,
    },
  ];

  return (
    <div className={`w-10/12 my-[80px] mx-auto`}>
      <div className={`my-3`}>
        <Breadcrumbs links={links} slug={params.slug} />
      </div>
      <div className={`flex justify-between items-start space-x-3`}>
        <div className={`w-8/12 flex flex-col gap-y-3`}>
          <div className={`relative overflow-hidden rounded-xl`}>
            <CustomImage
              image={`/logo.png`}
              alt={`banner`}
              className={`w-full h-[500px] object-cover rounded-xl`}
            />
            <div
              className={`absolute bottom-0 w-full backdrop-blur-lg px-5 py-3 bg-black/30 text-white`}
            >
              <h1 className={`text-2xl`}>{data.title}</h1>
              <p
                className={`text-sm underline underline-offset-4 text-gray-300`}
              >
                {data.date}
              </p>
            </div>
          </div>
          <div>
            <p>{data.content}</p>
          </div>
          <div
            className={`bg-violet-700 py-3 px-5 w-full rounded-lg flex justify-between items-center mt-5`}
          >
            <p className={`text-white font-[500] text-lg`}>
              Like what you see? Share with a friend.
            </p>
            <ul className={`flex gap-x-3`}>
              <li>
                <Link
                  href={`/`}
                  className={`text-3xl text-violet-700 bg-white px-2 p-1 rounded-lg`}
                >
                  <i className="bi bi-facebook"></i>
                </Link>
              </li>
              <li>
                <Link
                  href={`/`}
                  className={`text-3xl text-violet-700 bg-white px-2 p-1 rounded-lg`}
                >
                  <i className="bi bi-telegram"></i>
                </Link>
              </li>
              <li>
                <Link
                  href={`/`}
                  className={`text-3xl text-violet-700 bg-white px-2 p-1 rounded-lg`}
                >
                  <i className="bi bi-twitter-x"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`w-4/12`}>
          <ul className={`space-y-3`}>
            {data2.map((i) => (
              <li key={i.id}>
                <BlogCard word={120} data={i} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
