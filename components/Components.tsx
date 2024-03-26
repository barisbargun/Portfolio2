import { menuLinks, pageInfo } from "@/constants/index";
import Link from "next/link";

export const PageInfo = ({desc}:{desc:string}) => (
  <div className="flex-center absolute right-0 top-[5rem] gap-2 opacity-40">
    <small className="w-[12rem] text-right text-xs uppercase">
      {desc}
    </small>
    <span className="h-0.5 w-10 bg-white sm:w-36 xl:w-80"></span>
  </div>
);

export const LabelInfo = ({ label, text }: { label: string; text: string }) => (
  <div className="flex flex-col">
    <small className="opacity-40 sm:text-sm">{label}</small>
    <p className="text-xl font-bold sm:text-xl">{text}</p>
  </div>
);

export const MenuCreatorName = () => (
  <Link href={menuLinks.main.link}>
    <h2 className="ml-2 font-source text-base uppercase tracking-[0.2rem] opacity-85 transition-opacity hover:opacity-100 md:font-semibold md:tracking-[0.4rem]">
      {pageInfo.creatorName}
    </h2>
  </Link>
);
