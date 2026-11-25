import Image from "next/image";
import Link from "next/link";
import React from "react";
import Title from '@/app/components/Title'
export interface productNames {
  id: number;
  title: string;
  link: string;
}

const products: productNames[] = [
  { id: 1, title: "Nuts & Seeds", link: "/banners/c1.avif" },
  { id: 2, title: "Amader Chatu", link: "/banners/c2.avif" },
  { id: 3, title: "Amader Oil", link: "/banners/c3.avif" },
  { id: 4, title: "Amader Modhu", link: "/banners/c4.avif" },
  { id: 5, title: "Amader Spices", link: "/banners/c5.avif" },
  { id: 6, title: "Amader Herbs", link: "/banners/c6.avif" },
  { id: 7, title: "Amader Achar", link: "/banners/c7.avif" },
  { id: 8, title: "Amader Oil", link: "/banners/c8.avif" },
];

const FeatureCategory = () => {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-6">
      {/* <h2 className="text-center text-2xl font-semibold uppercase text-global-main md:text-[30px]">
        Featured Categories
      </h2> */}
     <Title text="text-center">FEATURED CATEGORIES</Title>;
      {/* mobile/tablet: swipe row, desktop: 8 equal columns */}
      <div className="flex snap-x gap-4 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-8 lg:overflow-visible">
        {products.map((item) => (
          <Link
            key={item.id}
            href={`/category/${item.id}`}
            className="group w-32 shrink-0 snap-start overflow-hidden rounded-2xl bg-[#fdf6e3] pb-3 transition hover:shadow-md sm:w-36 lg:w-auto"
          >
            <div className="relative aspect-square w-full">
              <Image
                src={item.link}
                alt={item.title}
                fill
                sizes="(min-width:1024px) 12vw, 144px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-2 px-2 text-center text-sm font-medium text-neutral-800">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeatureCategory;