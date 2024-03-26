import { homePage, menuLinks } from "@/constants/index";
import { HeroButtons } from "../index";
import Image from "next/image";

const Hero = () => {
  const title = homePage.title.split(" ");
  return (
    <div
      className="page bg-hero bg-cover bg-no-repeat mix-blend-screen lg:items-end"
      id={menuLinks.main.link.slice(1)}
    >
      <div className="pageWidth">
        <div className="z-10 mt-10 flex w-fit flex-1 flex-col items-start">
          <h1 className="title">
            <span className="drop-shadow-whiteGlow">
              {title.slice(0, 2).join(" ")}
            </span>
            <span className="mt-1 block text-indigo-600 drop-shadow-indigoGlow">
              {title.slice(2).join(" ")}
            </span>
          </h1>
          <HeroButtons />
        </div>
        <Image
          height={550}
          width={446}
          src={homePage.img}
          alt="character"
          className="pointer-events-none h-[550px] max-lg:hidden"
        />
      </div>
    </div>
  );
};

export default Hero;
