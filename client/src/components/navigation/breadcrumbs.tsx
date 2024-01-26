import React from "react";
import Link from "next/link";

interface Links {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  links: Links[];
  slug: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ links, slug }) => {
  return (
    <div className={`inline-block`}>
      <ul className={`flex items-center gap-x-3 border px-3 py-1 rounded-lg`}>
        {links.map((i, id) => (
          <>
            <li
              key={id}
              className={`cursor-pointer hover:text-blue-500 hover:underline underline-offset-4 ${
                i.href == slug ? "text-blue-500 underline" : ""
              }`}
            >
              <Link href={i.href}>{i.name}</Link>
            </li>
            <li>/</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
