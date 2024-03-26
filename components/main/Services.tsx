import { menuLinks, servicePage } from "@/constants/index";
import { PageInfo, ServiceHeader, ServiceIdeas } from "../index";

const Services = () => {
  return (
    <div
      className="page relative h-auto min-h-screen pb-40"
      id={menuLinks.services.link.slice(1)}
    >
      <div className="hero-bg opacity-40" />
      <PageInfo desc={servicePage.desc} />

      <div className="pageWidth mt-10 flex-col items-center justify-start gap-14 sm:mt-14">
        <ServiceHeader serviceProps={servicePage} />
        <ServiceIdeas ideas={servicePage.ideas}/>
      </div>
    </div>
  );
};

export default Services;
