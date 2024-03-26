import { menuLinks, portfolioPage } from "@/constants/index";
import { PagePercentage, Project } from "../index";

const Portfolio = () => {
  return (
    <div
      className="relative flex flex-col"
      id={menuLinks.portfolio.link.slice(1)}
    >
      <div className="pageGradient absolute bottom-0 left-0 top-0 w-screen" />
      <div className="bg-stars absolute bottom-0 left-0 h-full w-screen bg-cover bg-bottom opacity-20" />
      <PagePercentage />
      <div className="my-20 flex w-full justify-center">
        <div className="pageWidth flex-col items-center gap-28">
          {portfolioPage.projects.map((v) => (
            <Project project={v} key={v.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
