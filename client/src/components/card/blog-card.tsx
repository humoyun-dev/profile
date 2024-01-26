"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import CustomImage from "@/components/media/image";
import { useRouter } from "next/navigation";

interface BlogCardProps {
  data: any;
  word: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ data, word }) => {
  const router = useRouter();
  return (
    <Card
      onClick={() => router.push(`/blog/${data.slug}`)}
      className={`shadow-none flex cursor-pointer`}
    >
      <div className={`p-4 w-3/4 flex flex-col space-y-2`}>
        <h3 className={`font-semibold`}>{data.title}</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: data.content.slice(0, word) + "...",
          }}
        ></div>
        <p
          className={`underline underline-offset-2 text-gray-500 dark:text-gray-400`}
        >
          {data.date}
        </p>
      </div>
      <div className={`w-1/4 p-2`}>
        <CustomImage
          image={`/logo.png`}
          alt={data.title}
          className={`rounded w-full h-[170px] object-cover`}
        />
      </div>
    </Card>
  );
};

export default BlogCard;
