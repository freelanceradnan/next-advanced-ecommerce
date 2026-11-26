import { Clock, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { CiInstagram, CiYoutube } from 'react-icons/ci';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white text-gray-700">
      <div className="mx-auto w-full max-w-[1400px] px-4 py-12">
        {/* all-columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* socials-info */}
          <div className="space-y-4">
           
            <div className="relative h-12 w-40">
              <Image
                src="/images/main_logo.avif"
                alt="Amader logo"
                fill
                sizes="160px"
                className="object-contain object-left"
              />
            </div>

            <div className="space-y-2.5 text-sm text-gray-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#21713D]" />
                <p>Address: Salna, Gazipur</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#21713D]" />
                <p>Phone: +880 1XXX-XXXXXX</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-[#21713D]" />
                <p>Hours: Sat - Thu, 9:00 AM - 8:00 PM</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition hover:border-[#21713D] hover:bg-[#21713D] hover:text-white"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition hover:border-[#21713D] hover:bg-[#21713D] hover:text-white"
              >
                <CiInstagram size={18} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition hover:border-[#21713D] hover:bg-[#21713D] hover:text-white"
              >
                <CiYoutube size={18} />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition hover:border-[#21713D] hover:bg-[#21713D] hover:text-white"
              >
                <FaTiktok size={16} />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition hover:border-[#21713D] hover:bg-[#21713D] hover:text-white"
              >
                <FaWhatsapp size={17} />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h2 className="mb-4 text-base font-semibold text-gray-900">About Amader™</h2>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-[#21713D]">About Amader™</Link></li>
              <li><Link href="/brand" className="hover:text-[#21713D]">Amader™ Brand</Link></li>
              <li><Link href="/contact" className="hover:text-[#21713D]">Contact Amader™</Link></li>
              <li><Link href="/commitment" className="hover:text-[#21713D]">Amader™ Commitment</Link></li>
              <li><Link href="/corporate-sales" className="hover:text-[#21713D]">Corporate Sales</Link></li>
              <li><Link href="/vision-mission" className="hover:text-[#21713D]">Amader™ Vision Mission</Link></li>
              <li><Link href="/founder-story" className="hover:text-[#21713D]">Founder Story</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2 className="mb-4 text-base font-semibold text-gray-900">Customer Service</h2>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><Link href="/help" className="hover:text-[#21713D]">Help Center</Link></li>
              <li><Link href="/returns" className="hover:text-[#21713D]">Returns & Refunds</Link></li>
              <li><Link href="/shipping" className="hover:text-[#21713D]">Shipping Policy</Link></li>
              <li><Link href="/track-order" className="hover:text-[#21713D]">Track Your Order</Link></li>
              <li><Link href="/faq" className="hover:text-[#21713D]">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h2 className="mb-4 text-base font-semibold text-gray-900">Legal & Policies</h2>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><Link href="/privacy-policy" className="hover:text-[#21713D]">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#21713D]">Terms & Conditions</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-[#21713D]">Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* copyright-bar */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>Copyright © 2026 Amader Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;