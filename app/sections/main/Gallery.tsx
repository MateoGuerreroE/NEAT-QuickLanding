import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export type GalleryItem = {
  location: string;
  title: string;
  image: string;
};

export default function Gallery() {
  const data: GalleryItem[] = [
    {
      location: "Brooklyn",
      title: "SIDING",
      image: "/REMOVE/IMG_4819.jpg",
    },
    {
      location: "Queens",
      title: "SHINGLE ROOFING",
      image: "/REMOVE/2025-04-18-16-02-20-543.png",
    },
    {
      location: "Yonkers",
      title: "FLAT ROOFING",
      image: "/REMOVE/IMG_4820.jpg",
    },
    {
      location: "Brooklyn",
      title: "SIDING",
      image: "/REMOVE/IMG_1094.png",
    },

    {
      location: "Long Island",
      title: "SHINGLE ROOFING",
      image: "/REMOVE/2025-04-02-17-50-51-956.png",
    },
  ];
  return (
    <section className="p-5 md:py-7 flex flex-col items-center gap-10 text-black">
      <div className="flex flex-col gap-1 items-center font-roboto">
        <h2 className="font-semibold text-xl 2xl:text-3xl">
          CHECK OUR PROJECTS GALLERY
        </h2>
        <p className="text-base md:text-lg 2xl:text-xl">
          From siding to roofing, from window to kitchen, we are prepared to
          change the whole look of your house.
        </p>
      </div>
      <div className="p-5 w-[90%] flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-[1200px]"
        >
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col gap-2 md:gap-5 aspect-square relative">
                      <div className="w-full aspect-square overflow-hidden">
                        <Image
                          src={item.image}
                          alt={`carousel_image_${index}`}
                          className="object-cover h-full w-full"
                          width={800}
                          height={800}
                        />
                      </div>
                      <div className="flex font-roboto text-black flex-col text-right">
                        <h5 className="font-semibold text-xl 2xl:text-3xl">
                          {item.title.toUpperCase()}
                        </h5>
                        <p className="text-base md:text-lg 2xl:text-xl">
                          {item.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
