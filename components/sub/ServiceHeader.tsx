import { CustomButton } from "../index";
import Image from "next/image";

type Props = {
  serviceProps: Pick<IServicePage, "title1" | "title2" | "img" | "btnText">;
};

const ServiceHeader = ({ serviceProps }: Props) => {
  const splittedTitle1 = serviceProps.title1.split(" ");
  const splittedTitle2 = serviceProps.title2.split(" ");

  return (
    <div className="flex-center w-fit flex-col gap-2 whitespace-nowrap text-5xl uppercase max-sm:text-center sm:gap-4 lg:text-5xl xl:text-6xl 2xl:text-7xl">
      <div className="flex-center gap-4">
        <Image
          src={serviceProps.img}
          alt="people"
          width={335}
          height={113}
          className="w-[200px] object-contain max-sm:hidden xl:w-[250px]"
        />
        <h2>
          <span className="font-bold text-indigo-600 lg:drop-shadow-indigoGlow sm:mr-4">
            {splittedTitle1.slice(0, 1)}
          </span>
          <span className="lg:drop-shadow-whiteGlow max-sm:mt-2 max-sm:block">
            {splittedTitle1.slice(1).join(" ")}
          </span>
        </h2>
      </div>
      <div className="flex-center gap-4 max-lg:flex-col">
        <h2>
          <span className="font-bold text-indigo-600 lg:drop-shadow-indigoGlow sm:mr-4">
            {splittedTitle2.slice(0, 2).join(" ")}
          </span>
          <span className="lg:drop-shadow-whiteGlow max-sm:mt-2 max-sm:block">
            {splittedTitle2.slice(2).join(" ")}
          </span>
        </h2>
        <CustomButton className="button-white">
          {serviceProps.btnText}
        </CustomButton>
      </div>
    </div>
  );
};

export default ServiceHeader;
