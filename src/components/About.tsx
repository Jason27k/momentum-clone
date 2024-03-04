"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const About = () => {
  const ref = useRef<HTMLImageElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <div
      className="pt-[10vh] bg-[#1b1b1b] flex flex-col items-center justify-center"
      id="about"
    >
      <motion.p
        variants={variants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className="text-sm uppercase py-5 text-[rgb(168,168,168)]"
      >
        Aenean Consectetur Porta
      </motion.p>
      <motion.h2
        variants={variants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        className="text-4xl font-bold w-[40%] text-center mb-20"
      >
        Nullam quis risus eget urna mollis ornare vel eu leo.
      </motion.h2>
      <div className="relative">
        <Image
          src="/hero/hero-two.png"
          alt="First Image"
          width={1200}
          height={800}
          ref={ref}
        />
      </div>
    </div>
  );
};

export default About;
