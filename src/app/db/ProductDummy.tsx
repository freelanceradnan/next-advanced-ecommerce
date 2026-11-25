//  id:number,
import { SellingProduct } from '@/app/components/TopSelling';
//     image:string,
//     title:string,
//     price:number,
//     mainPrice:number,
//     topSelling:boolean,
//     category:string,
//     rating:number,
//     size:ProductSize[],
//     watching:number,
//     purchase:string,


const defaultSizes = [
  { size: "2 KG", price: 500 },
  { size: "5 KG", price: 490 },
  { size: "10 KG", price: 990 },
];

const DummySellingProduct: SellingProduct[] = [
  {
    id: 1,
    image: "/banners/d1.avif",
    title: "Jober Atta (Barley Flour) | যবের আটা | Amader™",
    price: 700,
    mainPrice: 800,
    topSelling: true,
    category: "Amader Atta",
    rating: 500,
    size: defaultSizes,
    watching: 100,
    purchase: "4.9 K",
    description: `যবের আটা কী?
যবের আটা বা Jober Atta / Barley Flour হলো পরিষ্কার যব দানা গুঁড়া করে তৈরি একটি শস্যজাত আটা। যবের খোসা আর ভেতরের অংশ একসঙ্গে থাকে বলে এটি হোল গ্রেইন আটা, আর সেখান থেকেই আসে এর আঁশ, খনিজ আর হালকা বাদামি রঙটা।

যব পৃথিবীর প্রাচীন খাদ্যশস্যগুলোর একটি। এতে প্রাকৃতিকভাবে খাদ্যআঁশ, উদ্ভিজ্জ প্রোটিন এবং বিভিন্ন খনিজ উপাদান পাওয়া যায়। বিশেষ করে যবে বিটা-গ্লুকান (Beta-glucan) নামের এক ধরনের দ্রবণীয় আঁশ থাকে। যারা প্রতিদিন শুধু এক ধরনের শস্যের ওপর নির্ভর না করে খাবারে বৈচিত্র্য আনতে চান, তারা গমের আটার সঙ্গে যবের আটা মিশিয়ে ব্যবহার করতে পারেন। এটি দিয়ে যবের রুটি, চিলা, প্যানকেক, স্যুপ ঘন করা কিংবা তালবিনা তৈরি করা যায়।`,
  },
  {
    id: 2,
    image: "/banners/d2.avif",
    title: "Jober Chatu (Barley Grist) | যবের ছাতু | Amader™",
    price: 850,
    mainPrice: 1000,
    topSelling: true,
    category: "Amader Chatu",
    rating: 500,
    size: defaultSizes,
    watching: 100,
    purchase: "4.9 K",
    description: `যবের ছাতু কী? | Product Overview
যবের ছাতু (Jober Chatu / Barley Sattu) হলো যব বা Barley শস্য পরিষ্কার করে শুকিয়ে, ভেজে গুঁড়া করে তৈরি একটি পরিচিত শস্যজাত খাবার। Amader™ Jober Chatu তৈরি করা হয় ১০০% দেশি যব থেকে।

যব একটি প্রাচীন খাদ্যশস্য এবং সুন্নতী খাবার হিসেবে মুসলিম ঐতিহ্যে সুপরিচিত। হাদিসে বর্ণিত আছে, রাসূলুল্লাহ ﷺ অসুস্থ ও শোকগ্রস্ত ব্যক্তিদের জন্য তালবিনা তৈরি করতে বলতেন (সহীহ বুখারী, হাদিস ৫৪১৭)। আজও ঘরে ঘরে এটি সহজপাচ্য, হালকা ও আরামদায়ক খাবার হিসেবে খাওয়া হয়।`,
  },
  {
    id: 3,
    image: "/banners/d3.avif",
    title: "Gomer Lal Atta | গমের লাল আটা ( Whole Wheat Flour ) | Amader™",
    price: 525,
    mainPrice: 650,
    topSelling: true,
    category: "Amader Atta",
    rating: 500,
    size: defaultSizes,
    watching: 100,
    purchase: "4.9 K",
    description: `দেশি গমের লাল আটা কী?
দেশি গমের লাল আটা, যাকে Whole Wheat Flour, Gomer Lal Atta, Whole Wheat Atta বা Brown Atta নামেও বলা হয়, এমন গমের আটা যেখানে গমের ভুসি, অঙ্কুর এবং শাঁসের গুরুত্বপূর্ণ অংশগুলো রেখে তৈরি করা হয়। অতিরিক্ত পরিশোধিত সাদা আটা বা ময়দার তুলনায় লাল আটা কম পরিশোধিত। এতে গমের স্বাভাবিক ভুসি ও অঙ্কুরের উল্লেখযোগ্য অংশ থেকে যায়। এ কারণে এর রং সাধারণত হালকা বাদামি হয়, গঠন কিছুটা মোটা থাকে এবং রুটি তৈরি করলে গমের স্বাভাবিক স্বাদ ও ঘ্রাণ পাওয়া যায়।`,
  },
  {
    id: 4,
    image: "/banners/d5.avif",
    title: "Gomer Lal Atta | গমের লাল আটা ( Whole Wheat Flour ) | Amader™",
    price: 525,
    mainPrice: 800,
    topSelling: true,
    category: "Amader Atta",
    rating: 500,
    size: defaultSizes,
    watching: 100,
    purchase: "4.9 K",
    description: `দেশি গমের লাল আটা কী?
দেশি গমের লাল আটা, যাকে Whole Wheat Flour, Gomer Lal Atta, Whole Wheat Atta বা Brown Atta নামেও বলা হয়, এমন গমের আটা যেখানে গমের ভুসি, অঙ্কুর এবং শাঁসের গুরুত্বপূর্ণ অংশগুলো রেখে তৈরি করা হয়। অতিরিক্ত পরিশোধিত সাদা আটা বা ময়দার তুলনায় লাল আটা কম পরিশোধিত। এতে গমের স্বাভাবিক ভুসি ও অঙ্কুরের উল্লেখযোগ্য অংশ থেকে যায়। এ কারণে এর রং সাধারণত হালকা বাদামি হয়, গঠন কিছুটা মোটা থাকে এবং রুটি তৈরি করলে গমের স্বাভাবিক স্বাদ ও ঘ্রাণ পাওয়া যায়।`,
  },
  {
    id: 5,
    image: "/banners/d4.avif",
    title: "Mustard Oil (Sorishar Tel) | খাঁটি সরিষার তেল (৫ লিটার) | Amader™",
    price: 700,
    mainPrice: 1000,
    topSelling: true,
    category: "Amader Oil",
    rating: 500,
    size: defaultSizes,
    watching: 100,
    purchase: "4.9 K",
    description: `ঐতিহ্যবাহী কাঠের ঘানির সরিষার তেল, প্রতিদিনের বাঙালি রান্নার জন্য
বাংলাদেশের রান্নায় সরিষার তেল বহুদিনের পরিচিত একটি ভোজ্যতেল। বিশেষ করে ভর্তা, মাছ, শুঁটকি, সবজি, মাংস, ভাজা এবং আচারে সরিষার স্বাভাবিক ঝাঁজ ও ঘ্রাণ খাবারের স্বাদকে আলাদা করে তোলে।

Amader™ Cold Press Mustard Oil তৈরি হয় দেশি মাঘী সরিষা থেকে। দেশি সরিষা দানা ধীরে ধীরে তেঁতুল কাঠের ঘানিতে ভেঙে প্রথম চাপের তেল সংগ্রহ করা হয় এবং পরে ফিল্টার করে প্যাক করা হয়।`,
  },
  {
    id: 6,
    image: "/banners/d1.avif",
    title: "Kalojira Flower Honey | কালোজিরা ফুলের মধু | Amader™",
    price: 1200,
    mainPrice: 1400,
    topSelling: true,
    category: "Amader Modhu",
    rating: 500,
    size: defaultSizes,
    watching: 100,
    purchase: "4.9 K",
    description: `কালোজিরা ফুলের মধু কী?
কালোজিরা ফুলের মধু বা Kalojira Flower Honey হলো কালোজিরা গাছের ফুল থেকে nectar সংগ্রহ করে মৌমাছির তৈরি এক ধরনের flower honey। ইংরেজিতে এটি Black Seed Flower Honey, Black Cumin Flower Honey এবং Nigella Flower Honey নামে পরিচিত।

বাংলাদেশে কালোজিরা একটি শীতকালীন ফসল। ফুল ফোটার সময়ে কালোজিরা ক্ষেতের আশপাশে মৌবাক্স স্থাপন করা হলে মৌমাছি আশপাশের ফুল থেকে nectar সংগ্রহ করে চাকের মধ্যে জমা করে। সেই honeycomb থেকে সংগ্রহ করা মধুই কালোজিরা ফুলের মধু নামে পরিচিত।

কেন Amader™ কালোজিরা ফুলের?`,
  },
];

export default DummySellingProduct;