import { useNavigate } from "react-router-dom";

const Footer = () => {
  const date = new Date().getFullYear();
  const router = useNavigate();
  return (
    <div className={`border-t w-full py-5 flex justify-center items-center`}>
      <p>
        {date}. Made by{" "}
        <span
          onClick={() => router("/")}
          className={`font-bold underline underline-offset-4 cursor-pointer`}
        >
          Humoyun.dev
        </span>
      </p>
    </div>
  );
};

export default Footer;
