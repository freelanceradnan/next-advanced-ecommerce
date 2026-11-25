import React from "react";
import Link from "next/link";
import Title from "./Title";
import DummySellingProduct from "@/app/db/ProductDummy";
import Image from "next/image";
import { ShoppingCart, Tag, Zap } from "lucide-react";

export interface ProductSize {
  size: string;
  price: number;
}

export interface SellingProduct {
  id: number;
  image: string;
  title: string;
  price: number;
  mainPrice: number;
  topSelling: boolean;
  category: string;
  rating: number;
  size: ProductSize[];
  watching: number;
  purchase: string;
  description: string;
}

const TopSelling = () => {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-4 py-6 bg-[#F9F9F9]">
      <Title text="text-center">TOP SELLING PRODUCTS</Title>

      <div className="mt-6 grid gap-4 grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
        {DummySellingProduct.map((item) => {
            const hasDiscount = item.mainPrice > item.price && item.mainPrice > 0;
            const discountPercent = hasDiscount
  ? Math.round(((item.mainPrice - item.price) / item.mainPrice) * 100)
  : 0;
       return(
          <Link
  key={item.id}
  href={`/product/${item.id}`}
  className="group md:flex lg:justify-between rounded-xl bg-[#FFFFFF] p-4 transition hover:shadow-md gap-4 shadow-sm relative"
>
  {item.topSelling && (
  <span className="absolute right-0 top-0 z-[2] inline-flex items-center gap-1 rounded-bl-xl rounded-tr-2xl bg-[#E7C22D] px-1 md:px-3 py-1 md:py-1.5 text-xs font-bold text-slate-950 shadow-sm">
    <svg
      viewBox="0 0 24 24"
      width="12"
      height="12"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2c1 4-3 5-3 9a3 3 0 0 0 6 0c0-1.5-.8-2.6-.8-2.6S17 10 17 13a5 5 0 0 1-10 0c0-5 5-7 5-11Z" />
    </svg>
    <span>Best Selling</span>
  </span>
)}
  <div>
    <div className="relative h-full aspect-square w-full overflow-hidden rounded-lg bg-gray-50">
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

  
  </div>

  <div className="mt-3 flex flex-col gap-4">
     

    <h3 className="text-[13px] mt-1 line-clamp-2 md:text-[20px] font-semibold text-gray-900">
      {item.title}
    </h3>
    
      {item.mainPrice > item.price &&(
        <h3 className="bg-global-main md:hidden w-25 uppercase text-xs text-white font-semibold text-center rounded-full py-0.5 flex gap-1 justify-center"><Tag size={15}/>{discountPercent}% off</h3>
      )}
   
    <div className="flex items-baseline gap-2">
      <span className="text-base font-bold text-gray-900">
        ৳{item.price}
      </span>
      {item.mainPrice > item.price && (
        <span className="text-xs text-gray-400 line-through">
          ৳{item.mainPrice}
        </span>
      )}
    </div>
    <div className="bg-[#BFDB38] w-25 md:flex items-center justify-center rounded-full text-[14px] py-1 hidden">
        Save ৳{item.mainPrice-item.price}
    </div>
    <div className="flex flex-col gap-4 items-center md:items-start">
        <button className="md:w-40 border flex gap-1  flex items-center md:text-global-main md:py-2 justify-center bg-global-main md:bg-white text-white w-full md:rounded-xl py-3 rounded-full"><ShoppingCart /><span className="font-bold">Add To Cart</span></button>
        <button className="hidden w-40 border flex gap-1 rounded-sm md:flex items-center bg-global-main py-2 justify-center text-white"><Zap />Buy Now</button>
    </div>
    
  </div>
</Link>
       )
})}
      </div>
    </section>
  );
};

export default TopSelling;