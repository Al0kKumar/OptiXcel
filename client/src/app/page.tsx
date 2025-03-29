"use client";
import FeaturesSection from "@/components/Features";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Nav";
import StatsSection from "@/components/Stats";
import { useRef } from "react";
import Divider from "@/components/Divider";

export default function Home() {
  const featureRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    if (featureRef.current) {
      const navbarHeight = 80; // Match your Navbar height
      const offsetTop = featureRef.current.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  console.log("env is ", `${process.env.NEXT_PUBLIC_API_URL}`);

  const comp = 123;
  const conv = 59;

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero scrollToFeatures={scrollToFeatures} />
      <Divider/>
      <div ref={featureRef}>
        <FeaturesSection />
      </div>
      <StatsSection compressedCount={comp} convertedCount={conv} />
      <Footer/>
    </div>
  );
}