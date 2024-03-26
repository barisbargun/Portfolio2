"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MenuCreatorName, Sidebar } from "../index";

const NavMobile = () => {
  const [sideOpen, setSideOpen] = useState(false);

  return (
    <nav className="flex-center lg:hidden">
      <MenuCreatorName />
      <button
        aria-label="sidebar-button"
        title="sidebar-button"
        onClick={() => setSideOpen((v) => !v)}
        className="flex-center absolute left-[10px] top-[5px]  z-10 h-[43px] w-[43px] rounded-full"
      >
        <svg width="23" height="18" viewBox="0 0 23 18">
          <motion.path
            variants={{
              hidden: { d: "M 2 2.5 L 20 2.5", stroke:"white", transition:{delay:0.8} },
              show: { d: "M 3 16.5 L 17 2.5", stroke:"black" },
            }}
            initial="hidden"
            animate={sideOpen ? "show" : "hidden"}
          />
          <motion.path
            d="M 2 9.423 L 20 9.423"
            initial={{ opacity: 1 }}
            animate={sideOpen ? { opacity: 0 } : { opacity: 1,transition:{delay:0.9} }}
            stroke="white"
          />
          <motion.path
            variants={{
              hidden: { d: "M 2 16.346 L 20 16.346", stroke:"white", transition:{delay:0.9} },
              show: { d: "M 3 2.5 L 17 16.346", stroke:"black" },
            }}
            initial="hidden"
            animate={sideOpen ? "show" : "hidden"}
          />
        </svg>
      </button>
      <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen} />
    </nav>
  );
};

export default NavMobile;
