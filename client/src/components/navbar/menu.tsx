import { Sheet, SheetContent } from "@/components/ui/sheet";
import NavLink from "./nav-link";
import { Image } from "..";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onChange?: () => void;
  links: Links[];
}

interface Links {
  label: string;
  path: string;
}

const Menu = ({ isOpen, onChange, links }: Props) => {
  const router = useNavigate();

  return (
    <Sheet open={isOpen} onOpenChange={onChange}>
      <SheetContent className="z-[999] w-full">
        <div className="flex justify-between items-center">
          <div
            className={`flex items-center space-x-2 cursor-pointer`}
            onClick={function () {
              router("/");
            }}
          >
            <Image
              src={`/logo.png`}
              alt={"logo"}
              className={`rounded-full w-[40px]`}
            />
            <p className={`md:text-4xl text-2xl font-bold`}>Humoyun.Dev</p>
          </div>
          <div className="cursor-pointer" onClick={onChange}>
            <X />
          </div>
        </div>
        <ul
          className={`flex flex-col w-full pt-12 items-center justify-between space-y-2`}
        >
          {links.map((i, id: number) => (
            <li className="w-full" key={id} onClick={onChange}>
              <NavLink className="w-full" href={i.path}>
                {i.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default Menu;
