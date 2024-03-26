"use client";

import { menuLinks } from "@/constants/index";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  sideOpen: boolean;
  setSideOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ sideOpen, setSideOpen }: Props) => {
  const variants = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    hidden: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemVariants = {
    show: {
      y: 0,
      opacity: 1,
    },
    hidden: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div
      variants={{
        hidden: {
          clipPath: "circle(0px at 32px 28px)",
          transition: { delay: 0.5 },
        },
        show: { clipPath: "circle(1200px at 36px 36px)" },
      }}
      initial="hidden"
      animate={sideOpen ? "show" : "hidden"}
      transition={{
        duration: 0.4,
      }}
      className="flex-center absolute left-0 top-0 h-screen w-[400px] max-w-full bg-white"
    >
      <motion.ul
        variants={variants}
        initial="hidden"
        animate={sideOpen ? "show" : "hidden"}
        className="flex-center flex-col gap-6 font-source"
      >
        {Object.values(menuLinks).map((v) => (
          <motion.li variants={itemVariants} key={v.name}>
            <Link
              href={v.link}
              onClick={() => setSideOpen(false)}
              className="text-2xl text-black opacity-60 transition-opacity hover:opacity-100"
            >
              {v.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Sidebar;
