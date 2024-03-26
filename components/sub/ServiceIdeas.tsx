"use client";
import { Variants, motion } from "framer-motion";

type Props = {
  ideas: IIdea[];
};

const ServiceIdeas = ({ ideas }: Props) => {
  const variants: Variants = {
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        staggerChildren: 0.8,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="flex w-full flex-col justify-center gap-20 max-sm:items-center sm:grid sm:grid-cols-2 xl:grid-cols-4 xl:gap-10"
    >
      {ideas.map((v) => (
        <motion.section
          className="flex w-[85%] max-w-[400px] flex-col items-start sm:w-fit"
          key={v.title}
          variants={variants}
        >
          <h3 className="font-source font-semibold lg:drop-shadow-whiteGlow text-2xl lg:text-xl whitespace-nowrap">
            {v.title}
          </h3>
          <p className="text-xs font-semibold opacity-80 xl:text-sm">
            {v.desc}
          </p>
        </motion.section>
      ))}
    </motion.div>
  );
};

export default ServiceIdeas;
