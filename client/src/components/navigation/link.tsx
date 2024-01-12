import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  path: string;
}

const Link2: React.FC<LinkProps> = ({ href, children, path }) => {
  return (
    <Link href={href}>
      <Button variant={path == href ? "default" : "outline"}>{children}</Button>
    </Link>
  );
};

export default Link2;
