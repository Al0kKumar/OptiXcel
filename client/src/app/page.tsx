import FeaturesSection from "@/components/Features";
import { Hero } from "@/components/Hero"
import Navbar from "@/components/Nav";
import StatsSection from "@/components/Stats";



export default function Home() {
  const comp = 123;
const conv = 59;
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <Navbar/>
        <Hero/>
        <FeaturesSection/>
        <StatsSection compressedCount={comp} convertedCount={conv}/>
    </div>
  );
}
