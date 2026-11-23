"use client";

import { useState } from "react";
import Image from "next/image";
import {
  House,
  Book,
  Globe,
  MapPin,
  UserRound,
  Heart,
  ShoppingCart,
  Search,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

export interface MenuItems {
  id: number;
  name: string;
  available: boolean;
  href?: string;
}

export const menu: MenuItems[] = [
  { id: 1, name: "All Products", available: true, href: "/product" },
  { id: 2, name: "Amader Chatu", available: true, href: "/product" },
  { id: 3, name: "Amader Oil", available: true, href: "/product" },
  { id: 4, name: "Amader Atta", available: true, href: "/product" },
  { id: 5, name: "Amader Rice", available: true, href: "/product" },
  { id: 6, name: "Amader Modhu", available: true, href: "/product" },
  { id: 7, name: "Nuts & Seeds", available: true, href: "/product" },
  { id: 8, name: "Super Food", available: true, href: "/product" }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const visibleMenu = menu.slice(0, 5);
  const extraMenu = menu.slice(5);

  return (
    <nav className="w-full bg-global-bg border-b border-gray-200">
      {/* top-nav */}
      <div className="mx-auto flex min-h-18 w-full flex-wrap md:flex-nowrap items-center justify-between gap-3 py-2 max-w-7xl px-2">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="md:hidden rounded p-1.5 text-global-main hover:bg-black/5"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Image
            src="/images/main_logo.avif"
            alt="Main Logo"
            width={80}
            height={30}
            priority
            className="h-auto w-20 sm:w-24"
          />
        </div>

        {/* Desktop Nav + Search + Utility Actions */}
        <div className="font-google font-semibold leading-[20px] text-global-main flex flex-1 min-w-0 items-center justify-end md:justify-between gap-3 lg:gap-5">
          {/* Primary Links (desktop) */}
          <div className="flex items-center gap-4 shrink-0 text-[13px] whitespace-nowrap">
            <a href="#" className="flex items-center gap-1 hover:opacity-80">
              <House className="h-4 w-4 shrink-0" />
              <span>Home</span>
            </a>

            <a href="#" className="flex items-center gap-1 hover:opacity-80">
              <Book className="h-4 w-4 shrink-0" />
              <span>blog</span>
            </a>
          </div>

          {/* Search Input (desktop/tablet inline) */}
          <div className="relative hidden sm:block flex-1 min-w-0 max-w-xs md:max-w-xl lg:max-w-xl">
            <input
              type="text"
              placeholder="Search..."
              className="w-full min-w-0 rounded border border-global-main bg-white py-1.5 pl-3 pr-9 text-sm font-normal text-black placeholder:text-gray-400 focus:border-global-main focus:outline-1 focus:outline-global-main"
            />
            <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-global-main" />
          </div>

          {/* Stacked Utility Icons */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0 text-[11px] whitespace-nowrap">
            <a href="#" className="hidden md:flex flex-col items-center justify-center hover:opacity-80">
              <Globe className="h-4 w-4" />
              <span className="hidden lg:block">English</span>
            </a>

            <a href="#" className="hidden md:flex flex-col items-center justify-center hover:opacity-80">
              <MapPin className="h-4 w-4" />
              <span className="hidden lg:block">track order</span>
            </a>

            <a href="#" className="flex flex-col items-center justify-center hover:opacity-80">
              <UserRound className="h-4 w-4" />
              <span className="hidden lg:block">my account</span>
            </a>

            <a href="#" className="hidden sm:flex flex-col items-center justify-center hover:opacity-80">
              <Heart className="h-4 w-4" />
              <span className="hidden lg:block">wishlist</span>
            </a>

            <a href="#" className="flex flex-col items-center justify-center hover:opacity-80">
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden lg:block">cart</span>
            </a>
          </div>
        </div>

        {/* Mobile Search Row (shown below < 640px) */}
        <div className="relative w-full sm:hidden min-w-0">
          <input
            type="text"
            placeholder="Search..."
            className="w-full min-w-0 rounded border border-global-main bg-white py-1.5 pl-3 pr-9 text-sm font-normal text-black placeholder:text-gray-400 focus:border-global-main focus:outline-1 focus:outline-global-main"
          />
          <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-global-main" />
        </div>
      </div>

      {/* bottom-nav */}
      <div className="h-10 bg-global-main w-full relative">
        <div className="flex items-center justify-between gap-1 max-w-7xl mx-auto px-2 h-full font-semibold text-white">
          {/* Always visible items on small screens; all items shown on md+ */}
          {visibleMenu.map((item) => (
            <Link
              key={item.id}
              href={item.href ?? "#"}
              className="text-[11px] whitespace-nowrap px-1 hover:opacity-80"
            >
              {item.name}
            </Link>
          ))}

          {extraMenu.map((item) => (
            <Link
              key={item.id}
              href={item.href ?? "#"}
              className="hidden md:inline-block text-[11px] whitespace-nowrap px-1 hover:opacity-80"
            >
              {item.name}
            </Link>
          ))}

          {/* More dropdown for extra items on small screens */}
          {extraMenu.length > 0 && (
            <div className="relative md:hidden">
              <button
                type="button"
                onClick={() => setMoreOpen((prev) => !prev)}
                className="text-[11px] whitespace-nowrap px-1.5 py-1 hover:opacity-80"
              >
                More ▾
              </button>

              {moreOpen && (
                <div className="absolute right-0 top-full mt-1 z-50 bg-white text-black rounded shadow-md border border-gray-100 py-1 min-w-[150px] flex flex-col">
                  {extraMenu.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href ?? "#"}
                      onClick={() => setMoreOpen(false)}
                      className="text-[11px] px-3 py-1.5 hover:bg-gray-100 whitespace-nowrap"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}