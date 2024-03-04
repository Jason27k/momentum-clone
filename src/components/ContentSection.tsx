"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.2, ease: "easeInOut" },
  },
};

interface Props {
  sectionTitle: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  flip?: boolean;
  first: boolean;
  id: string;
}

const ContentSection = ({
  sectionTitle,
  title,
  description,
  image,
  alt,
  flip,
  first,
  id,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
  return (
    <div
      className={cn(
        "h-auto flex items-center justify-center text-black flex-wrap px-[-500px]",
        flip ? "flex-row-reverse py-[15vh]" : ""
      )}
      id={first ? id : undefined}
    >
      <motion.div
        variants={variants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        ref={ref}
        className="flex-1 max-w-[450px] md: mx-[4vw] flex flex-col items-start gap-4"
      >
        <p className="text-[#a8a8a8] font-bold uppercase">{sectionTitle}</p>
        <h2 className="text-3xl font-bold md:text-5xl leading-10">{title}</h2>
        <h3 className="text-lg text-[#6b6b6b] leading-8">{description}</h3>
      </motion.div>
      <div className="relative">
        <Image
          src={image}
          alt={alt}
          width={350}
          height={350}
          className="min-w-[300px] h-full"
        />
      </div>
    </div>
  );
};

export default ContentSection;
