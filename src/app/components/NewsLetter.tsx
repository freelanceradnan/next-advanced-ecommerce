import Image from "next/image";
import React from "react";

const NewsLetter = () => {
  return (
   <section className="mx-auto w-full max-w-[1400px] px-4 py-6">
      <div className="relative min-h-[400px] w-full overflow-hidden rounded-2xl bg-[#EEF6F1] sm:h-[300px] lg:h-[340px]">
        <Image
          src="/banners/news.avif"
          alt="Newsletter banner"
          fill
          sizes="(max-width: 1400px) 100vw, 1400px"
          className="object-cover object-right sm:object-center"
        />

        <div className="relative z-10 flex h-full min-h-[400px] flex-col justify-center px-5 py-8 sm:min-h-0 sm:px-10 lg:px-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 sm:text-3xl">
            Subscribe to Amader
          </h2>
          <p className="mt-1.5 max-w-md text-sm text-gray-600 sm:text-base">
            Fresh groceries, straight to your door.
          </p>

          <form className="mt-4 flex w-full max-w-xl flex-col gap-2.5 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-[#1F6A3B] focus:outline-none focus:ring-2 focus:ring-[#1F6A3B]/20"
            />
            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-[#1F6A3B] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#18552F]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;