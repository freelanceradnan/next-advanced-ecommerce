
import FeatureCategory from "./components/FeatureCategory";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import SwiperHero from "./components/SwiperHero";
import TopSelling from "./components/TopSelling";



export default function Home() {
  return (
    <div className={`mx-auto `}>
    <Navbar/>
   
     <SwiperHero/>
   <FeatureCategory/>
   <TopSelling/>
   <NewsLetter/>
   <Footer/>
   {/* <Body/> */}

    </div>
  );
}
