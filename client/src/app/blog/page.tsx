import React from "react";
import BlogCard from "@/components/card/blog-card";
import { DatePicker } from "@/components/date-picker/date-picker";

const data = [
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

const BlogsPage = () => {
  return (
    <div
      className={`min-h-screen w-10/12 mx-auto flex gap-x-3 justify-between mt-[90px] items-start`}
    >
      <div className={`w-2/3`}>
        <ul className={`space-y-3`}>
          {data.map((i) => (
            <li key={i.id}>
              <BlogCard word={120} data={i} />
            </li>
          ))}
        </ul>
      </div>
      <div className={`w-1/3 `}>
        <div>
          <div className={`p-6`}>
            <h1 className={`text-xl font-semibold border-b pb-2`}>Filter:</h1>
            <DatePicker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
