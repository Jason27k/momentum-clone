import Image from "next/image";
import { Button } from "./ui/button";

const MainHero = () => {
  return (
    <div className="md:h-screen flex pt-[15vh] flex-col justify-start items-center md:flex-row md:justify-end relative gap-5">
      <div className="z-10 md:absolute md:left-[10vw] md:top-1/3 flex flex-col justify-start items-center md:items-start">
        <h1 className="text-[8vh] md:text-[10vh] font-bold tracking-tighter leading-none">
          Momentum
        </h1>
        <p className="text-muted md:text-2xl text-wrap mb-4 text-center md:text-left max-w-[60%] lg:max-w-[100%]">
          Launch your product &mdash; and savor the momentum.
        </p>
        <Button className="w-[169px] h-[66px] bg-[#fc0a7e] text-[16px] font-semibold">
          Get the App
        </Button>
      </div>
      <Image
        src="/hero/hero.png"
        alt="Hero Image"
        width={600}
        height={600}
        className="md:absolute w-[70%] min-w-[350px] max-w-[600px] z-1"
      />
    </div>
  );
};

export default MainHero;
