import { homePage } from "@/constants/index";
import { CustomButton } from "../index";

const HeroButtons = () => {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-4">
      <CustomButton
        href={homePage.btn1.link}
        blank={false}
        className="button-white"
      >
        {homePage.btn1.name}
      </CustomButton>
      <CustomButton
        href={homePage.btn2.link}
        blank={false}
        className="button-indigo"
      >
        {homePage.btn2.name}
      </CustomButton>
    </div>
  );
};

export default HeroButtons;
