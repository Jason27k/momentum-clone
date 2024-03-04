"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { MoveDown } from "lucide-react";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const MainHero = () => {
  return (
    <div
      className="relative bg-gradient-to-br from-[#dd1173] to-[#350e47] md:h-screen pt-[15vh] overflow-hidden"
      id="main"
    >
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="h-full w-full flex flex-col justify-start items-center md:flex-row md:justify-end 
      relative gap-5"
      >
        <div className="z-10 md:absolute md:left-[10vw] md:top-1/3 flex flex-col justify-start items-center md:items-start">
          <h1 className="text-[calc(28px+5vw)] md:text-[10vh] font-bold tracking-tighter leading-none">
            Momentum
          </h1>
          <p className="md:text-2xl text-wrap mb-4 text-center md:text-left max-w-[60%] lg:max-w-[100%]">
            Launch your product &mdash; and savor the momentum.
          </p>
          <Button className="w-[169px] h-[66px] bg-[#fc0a7e] text-[16px] font-semibold hover:bg-white hover:text-[#6b6b6b]">
            Get the App
          </Button>
        </div>
        <Image
          src="/hero/hero.png"
          alt="Hero Image"
          width={600}
          height={600}
          className="md:absolute w-[70%] min-w-[350px] max-w-[600px] z-1 2xl:max-w-[900px]"
        />
      </motion.div>
      <MoveDown className="absolute bottom-10 left-1/2" size={50} />
    </div>
  );
};

export default MainHero;
