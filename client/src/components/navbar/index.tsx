import { useNavigate } from "react-router-dom";
import { Image } from "..";
import NavLink from "./nav-link";

const Navbar = () => {
  const router = useNavigate();

  const navLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div
      className={`py-3 border-b dark:bg-black bg-white/70 backdrop-blur-md fixed w-full z-[999] top-0`}
    >
      <div className={`container mx-auto flex items-center justify-between`}>
        <div
          className={`flex items-center space-x-2 cursor-pointer`}
          onClick={() => router("/")}
        >
          <Image
            src={`/logo.png`}
            alt={"logo"}
            width={50}
            height={50}
            className={`rounded-full`}
          />
          <p className={`text-4xl font-bold`}>Humoyun.Dev</p>
        </div>
        <ul className={`flex items-center justify-between space-x-2`}>
          {navLinks.map((i, id: number) => (
            <li key={id}>
              <NavLink href={i.path}>{i.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
