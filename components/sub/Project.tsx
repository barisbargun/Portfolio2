import { CustomButton } from "../index";

type Props = {
  project: IProject;
};

const Project = ({ project }: Props) => {
  return (
    <div className="z-10 flex h-full w-[90%] items-start gap-4 max-xl:flex-col sm:w-full sm:items-center sm:gap-10 xl:justify-between xl:gap-20">

      <img
        src={project.img}
        alt="project-img"
        className="aspect-video w-full object-contain lg:w-[50%] xl:w-[50%] max-w-[675px]"
      />
      <div className="flex h-fit w-full flex-col gap-4 sm:items-center xl:items-start">
        <h3 className="line-clamp-1 text-2xl font-bold lg:drop-shadow-whiteGlow sm:text-3xl">
          {project.title}
        </h3>
        <p className="line-clamp-[10] text-sm">{project.desc}</p>
        <div className="flex-center gap-4 max-sm:justify-start [&>*]:h-[50px] [&>*]:w-[130px] [&>*]:text-xs sm:[&>*]:w-[150px] sm:[&>*]:text-sm">
          <CustomButton href={project.source} className="button-white">
            Source Code
          </CustomButton>
          <CustomButton href={project.url} className="button-indigo">
            Visit
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Project;
