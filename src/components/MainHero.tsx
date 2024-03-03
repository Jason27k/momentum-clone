import Image from "next/image";

const MainHero = () => {
  return (
    <div className="h-full flex flex-col items-center justify-around lg:flex-row lg:justify-end relative gap-0">
      <div className="lg:absolute lg:left-40 lg:top-1/3">
        <h1 className="text-7xl lg:text-9xl font-bold">Momentum</h1>
        <p className="text-muted lg:text-3xl text-wrap">
          Launch your product &mdash; and savor the momentum.
        </p>
      </div>
      <Image src="/hero/hero.png" alt="Hero Image" width={1100} height={1100} />
    </div>
  );
};

export default MainHero;
