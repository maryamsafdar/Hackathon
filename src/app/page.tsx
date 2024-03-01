

import BestSelling from "@/components/BestSelling";
import Categories from "@/components/Categories";
import FeatureProducts from "@/components/FeatureProducts";
import Hero from "@/components/Hero";
import Promotion from "@/components/Promotion";
import Services from "@/components/Services";



export default function Home() {
  return (
    <div>
      <Hero/>
      <FeatureProducts/>
      <Services/>
      <Promotion/>
      <Categories/>
      <BestSelling />

    
    </div>
  )
    
}
