import About from "@/components/About";
import ContentWrapper from "@/components/ContentWrapper";
import Facts from "@/components/Facts";
import Header from "@/components/Header";
import ContentContainer from "@/components/ContentContainer";
import MainHero from "@/components/MainHero";
import Stats from "@/components/Stats";
import { content, secondaryContent } from "@/lib/constants";
import QuoteCarousel from "@/components/QuoteCarousel";
import ImageContainer from "@/components/ImageContainer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <MainHero />
      <About />
      <ContentWrapper>
        <ContentContainer content={content} id="features" />
        <Facts />
        <Stats />
        <ContentContainer content={secondaryContent} id="how to use" />
        <QuoteCarousel />
        <ImageContainer
          path="/content/logos.png"
          alt="Image of company Logos"
          height={43}
          width={1000}
          className="w-full flex justify-center items-center -mt-12"
          childClassName="w-3/4"
        />
      </ContentWrapper>
      <ImageContainer
        path="/content/last.jpg"
        alt="Final Image"
        fill
        objectCover="cover"
        className="h-[60vh]"
      />
      <Footer />
    </div>
  );
}
