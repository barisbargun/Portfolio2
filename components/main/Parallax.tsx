"use client"

import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

type Props = {
  title: string;
  planetImg:string;
};

const Parallax = ({ title,planetImg }: Props) => {
  const ref = useRef<any>();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const scaleStarsTransform = useTransform(scrollYProgress, [0, 1], ["100%", "250%"]);
  const scalePlanetTransform = useTransform(scrollYProgress, [0, 1], ["100%", "150%"]);

  return (
    <div className="page relative flex-center pointer-events-none" ref={ref}>
      <div className="absolute bottom-0 left-0 top-0 w-screen pageGradient" />
      <motion.h2 style={{y:yTransform}} className="text-6xl max-sm:w-2 flex-center text-center md:text-7xl font-bold mt-[-2rem]">{title}</motion.h2>

      <motion.div style={{scale:scalePlanetTransform}} className={"absolute bottom-0 left-0 h-full w-screen bg-contain bg-bottom bg-no-repeat " + planetImg} />

      <motion.div style={{scale:scaleStarsTransform}} className="bg-stars absolute bottom-0 left-0 h-full w-screen bg-cover bg-bottom" />

      <div className="bg-mountains absolute bottom-0 left-0 h-full w-screen bg-contain bg-bottom bg-no-repeat lg:bg-cover" />
    </div>
  );
};

export default Parallax;
