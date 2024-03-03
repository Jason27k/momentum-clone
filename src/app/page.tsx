import About from "@/components/About";
import Header from "@/components/Header";
import MainHero from "@/components/MainHero";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <MainHero />
      <About />
    </div>
  );
}
