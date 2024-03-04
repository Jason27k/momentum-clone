"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { QuoteIcon } from "lucide-react";
import { quotes } from "@/lib/constants";

const QuoteCarousel = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="flex items-center justify-center p-6 h-[80vh] -mt-44">
      <Carousel
        plugins={[plugin.current]}
        className="w-3/4 sm:h-full relative flex items-center"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {quotes.map(({ quote, author, publication }) => (
            <CarouselItem
              key={author}
              className="h-full flex items-center justify-center"
            >
              <div className="p-1">
                <Card className="flex items-center justify-center border-0 shadow-none">
                  <CardContent className="flex flex-col h-full w-3/4 sspect-video items-center justify-center p-6 gap-6">
                    <QuoteIcon size={40} />
                    <span className="text-[3.5vw] sm:text-2xl font-semibold text-center">
                      {quote}
                    </span>
                    <div className="flex flex-col items-end text-center">
                      <span className="text-md sm:text-lg">
                        &mdash;{author}{" "}
                        <span className="font-semibold">{publication}</span>
                      </span>
                      <span className=" text-center"></span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-gray-400 sm:w-20 sm:h-20" />
        <CarouselNext className="bg-gray-400 sm:w-20 sm:h-20" />
      </Carousel>
    </div>
  );
};

export default QuoteCarousel;
