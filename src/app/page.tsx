
import FeatureCategory from "./components/FeatureCategory";
import { Navbar } from "./components/Navbar";
import SwiperHero from "./components/SwiperHero";
import TopSelling from "./components/TopSelling";



export default function Home() {
  return (
    <div className={`mx-auto `}>
    <Navbar/>
   
     <SwiperHero/>
   <FeatureCategory/>
   <TopSelling/>
   {/* <Body/> */}

    </div>
  );
}
