import { List, SkillCard } from "@/components";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AboutPage = () => {

  const currentYear = new Date().getFullYear();
  const yearsSince2021 = currentYear - 2021;

  const education = [
    {
      title: "Master in Computer Engineering",
      subtitle: "Harvard University / 2015 - 2017",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
    },
    {
      title: "Master in Computer Engineering",
      subtitle: "Harvard University / 2015 - 2017",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
    },
    {
      title: "Master in Computer Engineering",
      subtitle: "Harvard University / 2015 - 2017",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
    },
    {
      title: "Master in Computer Engineering",
      subtitle: "Harvard University / 2015 - 2017",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
    },
  ];

  const experience = [
    {
      title: "Sr. Font End Developer",
      subtitle: "Apple Inc / 2020 - current",
      content:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      title: "Sr. Font End Developer",
      subtitle: "Apple Inc / 2020 - current",
      content:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      title: "Sr. Font End Developer",
      subtitle: "Apple Inc / 2020 - current",
      content:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
    {
      title: "Sr. Font End Developer",
      subtitle: "Apple Inc / 2020 - current",
      content:
        "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
    },
  ];

  const skill = [
    {
      title: "JavaScript",
      status: "basic",
      image: "/javascript.png",
    },
    {
      title: "JavaScript",
      status: "basic",
      image: "/javascript.png",
    },
    {
      title: "JavaScript",
      status: "basic",
      image: "/javascript.png",
    },
    {
      title: "JavaScript",
      status: "basic",
      image: "/javascript.png",
    },
    {
      title: "JavaScript",
      status: "basic",
      image: "/javascript.png",
    },
    {
      title: "JavaScript",
      status: "basic",
      image: "/javascript.png",
    },
    {
      title: "JavaScript",
      status: "basic",
      image: "/javascript.png",
    },
    {
      title: "JavaScript",
      status: "basic",
      image: "/javascript.png",
    },
  ];

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
    <>
      <section className="min-h-screen flex items-center">
        <div className="w-full">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4 items-center space-x-3">
              <hr className="bg-blue-700 h-1 w-1/3" />
              <p className="bg-violet-700 w-fit px-3 text-lg">About Me</p>
              <hr className="bg-blue-700 h-1 w-1/3" />
            </div>
            <h1 className="text-4xl font-semibold">Know Me More</h1>
          </div>
          <div className="flex flex-row justify-between items-center gap-x-6">
            <div className="w-2/3">
              <h1 className="text-3xl mb-4">
                {`Hi, I'm`}{" "}
                <span className="border-b-2 font-bold pb-1 border-violet-700">
                  Humoyunbek Tursunniyazov
                </span>
              </h1>
              <p className="text-2xl tracking-wider">
                {`I'm a designer & developer with a passion
                for web design. I enjoy developing simple, clean and slick
                websites that provide real value to the end user. Thousands of
                clients have procured exceptional results while working with me.
                Delivering work within time and budget which meets client’s
                requirements is our moto.`}
              </p>
            </div>
            <div className="w-1/3 flex justify-center items-center flex-col">
              <p className="text-[140px] font-black font-sans relative flex items-center justify-center">
                {yearsSince2021}
                <span className="absolute -z-10 bg-blue-700 rounded-full h-24 w-24"></span>
              </p>
              <p className="text-3xl">
                Years of <span className="font-black">Experience</span>
              </p>
            </div>
          </div>
          <div className="mt-24 grid grid-cols-3">
            <div>
              <p className="text-lg text-gray-500 dark:text-gray-400">Name:</p>
              <p className="text-xl">Humoyunbek Tursunniyazov</p>
            </div>
            <div>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Date of birth:
              </p>
              <p className="text-xl">25 July, 2007</p>
            </div>
            <div>
              <p className="text-lg text-gray-500 dark:text-gray-400">From:</p>
              <p className="text-xl">Tashkent, Uzbekistan</p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className="min-h-screen">
        <div className="text-center my-12">
          <div className="flex justify-center mb-4 items-center space-x-3">
            <hr className="bg-blue-700 h-1 w-1/3" />
            <p className="bg-violet-700 w-fit px-3 text-lg">Resume</p>
            <hr className="bg-blue-700 h-1 w-1/3" />
          </div>
          <h1 className="text-4xl font-semibold">A summary of My Resume</h1>
        </div>
        <div className="flex mt-24 justify-between items-start space-x-6">
          <List label="My Education" className="w-1/2" data={education} />
          <List label="My Experience" className="w-1/2" data={experience} />
        </div>
        <div className="my-16">
          <p className="font-semibold text-3xl">My Skills</p>
          <div className="grid grid-cols-6 gap-6 mt-12">
            {skill.map((i, id) => (
              <SkillCard {...i} key={id} />
            ))}
          </div>
          <div className="flex justify-center">
            <Button className="mt-14 w-1/3 text-xl">Download CV</Button>
          </div>
        </div>
      </section>
      <hr />
      <section className="">
        <div className="text-center my-12">
          <div className="flex justify-center mb-4 items-center space-x-3">
            <hr className="bg-blue-700 h-1 w-1/3" />
            <p className="bg-violet-700 w-fit px-3 text-lg">Contact</p>
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
            {/* <YMaps>
              <Map
                width={"100%"}
                height={"600px"}
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
            </YMaps> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
