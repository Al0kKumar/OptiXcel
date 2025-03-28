"use client";
import FeaturesSection from "@/components/Features";
import { Hero } from "@/components/Hero"
import Navbar from "@/components/Nav";
import StatsSection from "@/components/Stats";
import { useRef } from "react";



export default function Home() {
  const featureRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featureRef.current?.scrollIntoView({ behavior: "smooth" });
  };

   const comp = 123;
   const conv = 59;
  return (
    <div className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300">
      <Navbar/>
        <Hero scrollToFeatures={scrollToFeatures}/>
        <div ref={featureRef}>
        <FeaturesSection />
      </div>
        <StatsSection compressedCount={comp} convertedCount={conv}/>
    </div>
  );
}
