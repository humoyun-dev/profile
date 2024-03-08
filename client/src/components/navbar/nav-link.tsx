import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const NavLink: React.FC<Props> = ({ href, children, className }) => {
  const { pathname } = useLocation();
  return (
    <Link to={href}>
      <Button
        className={cn("hover:bg-primary hover:text-white px-6", className)}
        variant={href == pathname ? "default" : "secondary"}
      >
        {children}
      </Button>
    </Link>
  );
};

export default NavLink;
