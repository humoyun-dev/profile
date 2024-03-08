import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { Image, Menu } from "..";
import NavLink from "./nav-link";
import { useState } from "react";

const Navbar = () => {
  const router = useNavigate();

  const [open, setOpen] = useState<boolean>(false);

  const navLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
  ];

  return (
    <>
      <div
        className={`py-3 border-b dark:bg-black bg-white/70 backdrop-blur-md fixed w-full z-50 top-0`}
      >
        <div className={`container mx-auto flex items-center justify-between`}>
          <div
            className={`flex items-center space-x-2 cursor-pointer`}
            onClick={() => router("/")}
          >
            <Image
              src={`/logo.png`}
              alt={"logo"}
              className={`rounded-full md:w-[60px] w-[50px]`}
            />
            <p className={`md:text-4xl text-2xl font-bold`}>Humoyun.Dev</p>
          </div>
          <ul className={`md:flex hidden items-center justify-between space-x-2`}>
            {navLinks.map((i, id: number) => (
              <li key={id}>
                <NavLink href={i.path}>{i.label}</NavLink>
              </li>
            ))}
          </ul>

          <div className="md:hidden block cursor-pointer" onClick={()=>setOpen(!open)}>
            <HiMenu className="text-4xl"/>
          </div>
        </div>
      </div>
      <Menu links={navLinks} isOpen={open} onChange={() => setOpen(!open)} />
    </>
  );
};

export default Navbar;
