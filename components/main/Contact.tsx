import { contactPage, menuLinks } from "@/constants/index";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { ContactForm, LabelInfo, CustomButton } from "../index";

const Contact = () => {
  return (
    <div
      className="page relative h-auto min-h-screen pb-10"
      id={menuLinks.contact.link.slice(1)}
    >
      <div className="hero-bg opacity-30" />
      <div className="pageWidth flex items-start justify-between">
        <div className="flex w-full flex-wrap justify-between gap-10 sm:gap-20">
          <div className="flex flex-col gap-6 max-md:flex-1 sm:gap-10">
            <h2 className="text-5xl font-bold xl:text-6xl">
              Let&apos;s <span className="block">Contact</span>
            </h2>
            <LabelInfo label="Email" text={contactPage.email} />
            <LabelInfo label="Address" text={contactPage.address} />
            <LabelInfo label="Phone" text={contactPage.phone} />
            <div className="flex-center !justify-start gap-4">
              <CustomButton href={contactPage.github} type="icon">
                <FaGithubSquare color="white" className="size-8" />
              </CustomButton>

              <CustomButton href={contactPage.linkedin} type="icon">
                <FaLinkedin color="white" className="size-8" />
              </CustomButton>
            </div>
          </div>
          <div className="flex-center relative min-w-[15rem] max-w-[35rem] flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
