import { DownloadButton, Image, TypedText } from "@/components";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomePage = () => {
  const strings = [
    "Frontend Developer",
    "Backend Developer",
    "Web Designer",
    "",
  ];

  const currentYear = new Date().getFullYear();
  const yearsSince2021 = currentYear - 2021;

  const socialLinks = [
    {
      icon: <FaFacebook className="h-6 w-6" />,
      href: "https://www.facebook.com/devhumoyun",
    },
    {
      icon: <FaTelegram className="h-6 w-6" />,
      href: "https://t.me/humoyun_developer",
    },
    {
      icon: <FaInstagram className="h-6 w-6" />,
      href: "https://www.instagram.com/humoyun__dev/",
    },
    {
      icon: <FaXTwitter className="h-6 w-6" />,
      href: "https://twitter.com/humoyun__dev",
    },
    {
      icon: <FaGithub className="h-6 w-6" />,
      href: "https://github.com/humoyun-dev",
    },
  ];

  return (
    <section
      className={`mx-auto min-h-screen md:py-0 py-24 space-y-12 flex md:flex-row flex-col items-center justify-between`}
    >
      <div className={`md:w-7/12`}>
        <p
          className={`text-4xl font-semibold`}
        >{`Assalomu alaykum 👋. It's Me`}</p>
        <h1
          className={`text-5xl font-bold bg-gradient-to-r from-violet-600 from-40% to-blue-500 text-transparent bg-clip-text py-2`}
        >
          Humoyunbek Tursunniyazov
        </h1>
        <p className={`text-3xl mt-1 font-semibold`}>
          {`And I'm a  `}
          <TypedText
            className={`text-blue-500 font-semibold underline underline-offset-4`}
            strings={strings}
          />
        </p>
        <p className={`mt-10 text-xl font-[500]`}>
          {`I am from Uzbekistan. I have been working as a web developer for ${yearsSince2021} years. Contact me. 24/7 online`}
        </p>
        <div className={`mt-5`}>
          <ul className={`flex items-center space-x-2`}>
            {socialLinks.map((i, id: number) => (
              <li key={id}>
                <Link to={i.href} target="__black">
                  <Button variant={"secondary"} className="rounded">
                    {i.icon}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
          <DownloadButton/>
        </div>
      </div>
      <div className={`md:w-5/12 relative flex items-center justify-center w-full`}>
        <div
          className={`absolute w-[100px] md:left-10 -left-12 border-black border shadow-md shadow-primary top-10 -z-10 h-[100px] bg-violet-700 rounded-full flex items-center justify-center`}
        >
          <p className={`text-5xl -rotate-45`}>😎</p>
        </div>
        <div
          className={`absolute w-[100px] md:right-0 -right-6 border-black border shadow-md shadow-primary top-10 -z-10 h-[100px] bg-violet-700 rounded-full flex items-center justify-center`}
        >
          <p className={`text-5xl`}>🎉</p>
        </div>
        <div
          className={`absolute w-[100px] md:-bottom-10 -bottom-[60px] left-20  border-black border shadow-md shadow-primary  h-[100px] bg-violet-700 rounded-full flex items-center justify-center`}
        >
          <p className={`text-5xl`}>💻</p>
        </div>
        <div
          className={`rounded-full overflow-hidden bg-blue-500 border md:w-[400px] md:h-[400px] w-[300px] border-black shadow-lg shadow-primary`}
        >
          <Image alt={`banner`} src={`/banner.jpg`} className={`scale-110`} />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
