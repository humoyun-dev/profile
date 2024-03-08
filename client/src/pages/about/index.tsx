import { DownloadButton, Loader, SkillCard } from "@/components";
import { Button } from "@/components/ui/button";
import { SkillProps } from "@/interfaces/skills.interface";
import fetcher from "@/lib/fetcher";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import {
  FullscreenControl,
  GeolocationControl,
  Map,
  Placemark,
  RouteButton,
  RulerControl,
  TypeSelector,
  YMaps,
  ZoomControl,
} from "react-yandex-maps";

const AboutPage = () => {
  const currentYear = new Date().getFullYear();
  const yearsSince2021 = currentYear - 2021;
  const router = useNavigate();

  const [skill, setSkill] = useState<SkillProps[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetcher<SkillProps[]>("skillnames");
        setSkill(result);
        setLoading(false);
      } catch (error) {
        // Handle error
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

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

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  } else if (error) {
    const to = async () => {
      await router("/500");
    };

    to();
  } else {
    return (
      <>
        <section className="min-h-screen md:py-0 py-24 flex items-center">
          <div className="w-full">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4 items-center space-x-3">
                <hr className="bg-blue-700 h-1 w-3/12 md:w-1/3" />
                <p className="bg-violet-700 text-white w-fit px-3 md:text-lg">
                  About Me
                </p>
                <hr className="bg-blue-700 h-1 w-3/12 md:w-1/3" />
              </div>
              <h1 className="text-4xl font-semibold">Know Me More</h1>
            </div>
            <div className="flex md:flex-row flex-col justify-between items-center gap-x-6">
              <div className="md:w-2/3 ">
                <h1 className="text-3xl mb-4">
                  {`Hi, I'm`}{" "}
                  <span className="border-b-2 font-bold pb-1 border-violet-700">
                    Humoyunbek Tursunniyazov
                  </span>
                </h1>
                <p className="text-2xl tracking-wider md:pt-0 pt-3">
                  I'm Humoyunbek Tursunniyazov, a dedicated web developer with a
                  passion for creating elegant and efficient web solutions. With
                  a foundational understanding of computer science and a knack
                  for problem-solving, I entered the field of web development
                  driven by a desire to make a meaningful impact.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center items-center flex-col">
                <p className="text-[140px] font-black font-sans relative flex items-center justify-center">
                  {yearsSince2021}
                  <span className="absolute -z-10 bg-blue-700 rounded-full h-24 w-24"></span>
                </p>
                <p className="text-3xl">
                  Years of <span className="font-black">Experience</span>
                </p>
              </div>
            </div>
            <div className="mt-24 grid md:grid-cols-3 grid-cols-1 gap-y-3">
              <div>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Name:
                </p>
                <p className="text-xl">Humoyunbek Tursunniyazov</p>
              </div>
              <div>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  Date of birth:
                </p>
                <p className="text-xl">25 July, 2007</p>
              </div>
              <div>
                <p className="text-lg text-gray-500 dark:text-gray-400">
                  From:
                </p>
                <p className="text-xl">Tashkent, Uzbekistan</p>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <section className="py-24">
          <div className="text-center my-12">
            <div className="flex justify-center mb-4 items-center space-x-3">
              <hr className="bg-blue-700 h-1 w-2/12 md:w-1/3" />
              <p className="bg-violet-700 text-white w-fit px-3 md:text-lg">
                Resumemin-h-screen
              </p>
              <hr className="bg-blue-700 h-1 w-2/12 md:w-1/3" />
            </div>
            <h1 className="text-4xl font-semibold">A summary of My Resume</h1>
          </div>
          <div className="my-16">
            {skill.map((i) => (
              <div className="mt-8" key={i.id}>
                <p className="font-semibold text-3xl">{i.name}</p>
                <div className="grid md:grid-cols-8 gap-6 mt-3 grid-cols-4">
                  {i.skill.map((i, id) => (
                    <SkillCard {...i} key={id} />
                  ))}
                </div>
              </div>
            ))}

            <div className="flex justify-center">
              <DownloadButton />
            </div>
          </div>
          {/* <hr />
          <div></div> */}
        </section>
        <hr />
        <section className="">
          <div className="text-center my-12">
            <div className="flex justify-center mb-4 items-center space-x-3">
              <hr className="bg-blue-700 h-1 w-1/3" />
              <p className="bg-violet-700 text-white w-fit px-3 text-lg">
                Contact
              </p>
              <hr className="bg-blue-700 h-1 w-1/3" />
            </div>
            <h1 className="text-4xl font-semibold">How to Contact Me</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4">
            <ul className="flex gap-2 right-0">
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
            <div className="w-full pb-8">
              <YMaps>
                <Map
                  width={"100%"}
                  className="md:h-[600px] h-[300px]"
                  defaultState={{
                    center: [41.299265, 69.37615],
                    zoom: 14,
                    controls: [],
                  }}
                >
                  <Placemark geometry={[41.299265, 69.37615]} />
                  <FullscreenControl />
                  <GeolocationControl
                    options={{
                      float: "left",
                    }}
                  />
                  <RulerControl
                    options={{
                      float: "right",
                    }}
                  />
                  <RouteButton
                    options={{
                      float: "left",
                    }}
                  />
                  <TypeSelector
                    options={{
                      float: "right",
                    }}
                  />
                  <ZoomControl />
                </Map>
              </YMaps>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default AboutPage;
