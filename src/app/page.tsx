
import FeatureCategory from "./components/FeatureCategory";
import { Navbar } from "./components/Navbar";
import SwiperHero from "./components/SwiperHero";



export default function Home() {
  return (
    <div className={`mx-auto `}>
    <Navbar/>
   
     <SwiperHero/>
   <FeatureCategory/>
   {/* <Body/> */}

    </div>
  );
}
