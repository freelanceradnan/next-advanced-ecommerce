"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";

// Required Swiper styles (import only the ones you use)
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
export interface SliderNames{
    id:number,
    src:string,
    alt:string,
    href:string
}
const slidesOne:SliderNames[] = [
  { id: 1, src: "/banners/cf9efa97-c70a-47ec-a230-11fbcb6f483f-full.avif", alt: "Natural herbal powders", href: "/category/herbs" },
  { id: 2, src: "/banners/ea9ca50f-9174-422d-a094-e347308c513a-full.avif", alt: "Cold pressed oil", href: "/category/oil" },
  { id: 3, src: "/banners/f5558295-9ed5-4557-a764-d65e8484a636-full (1).avif", alt: "Pure honey", href: "/category/honey" },
  { id: 4, src: "/banners/f5558295-9ed5-4557-a764-d65e8484a636-full.avif", alt: "Premium dates", href: "/category/dates" },
   { id: 5, src: "/banners/fd519de9-61bb-4f4b-87f6-2d1a1e2544da-full.avif", alt: "Premium dates", href: "/category/dates" },
];
const slidesTwo = [
  { id: 1, src: "/banners/fd519de9-61bb-4f4b-87f6-2d1a1e2544da-full.avif", alt: "Natural herbal powders", href: "/category/herbs" },
  { id: 2, src: "/banners/f5558295-9ed5-4557-a764-d65e8484a636-full.avif", alt: "Cold pressed oil", href: "/category/oil" },
  { id: 3, src: "/banners/f5558295-9ed5-4557-a764-d65e8484a636-full (1).avif", alt: "Pure honey", href: "/category/honey" },
  { id: 4, src: "/banners/ea9ca50f-9174-422d-a094-e347308c513a-full.avif", alt: "Premium dates", href: "/category/dates" },
   { id: 5, src: "/banners/cf9efa97-c70a-47ec-a230-11fbcb6f483f-full.avif", alt: "Premium dates", href: "/category/dates" },
];

export default function SwiperHero() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-4 flex gap-2">
      {/* right-sider */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"                     
        fadeEffect={{ crossFade: true }}
        loop
        speed={700}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation
        pagination={{ clickable: true }}
        className="hero-swiper aspect-[16/6.3] overflow-hidden rounded-2xl h-80 w-[70%]"
      >
        {slidesOne.map((s, i) => (
          <SwiperSlide key={s.id}>
            <a href={s.href} className="relative block h-80 w-full">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* left-sider */}
       <Swiper
        modules={[Autoplay,EffectFade]}
        effect="fade"                     
        fadeEffect={{ crossFade: true }}
        loop
        speed={700}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation
        pagination={{ clickable: true }}
        className="hero-swiper aspect-[16/6.3] overflow-hidden rounded-2xl h-80 w-[30%]"
      >
        {slidesTwo.map((s, i) => (
          <SwiperSlide key={s.id}>
            <a href={s.href} className="relative block h-80 w-full z-0">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}