import Header from "@/components/Header";
import MainHero from "@/components/MainHero";

export default function Home() {
  return (
    <div className="h-[92vh] lg:h-screen bg-gradient-to-br from-[#dd1173] to-[#350e47]">
      <Header />
      <MainHero />
    </div>
  );
}
