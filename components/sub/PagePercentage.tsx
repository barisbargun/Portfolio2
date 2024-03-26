"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PagePercentage = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yTransform = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  return (
    <div ref={ref} className="absolute left-0 top-0 h-full min-h-screen w-full">
      <motion.div
        style={{ width: yTransform }}
        className="sticky left-0 top-12 z-20 h-1 w-12 bg-indigo-600 lg:top-16"
      />
    </div>
  );
};

export default PagePercentage;
