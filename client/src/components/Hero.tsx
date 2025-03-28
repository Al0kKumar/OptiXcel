"use client";
import { Button } from "./Button";

export const Hero = ({ scrollToFeatures }: { scrollToFeatures: () => void }) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-center text-center transform -translate-y-10">
        {/* Main Heading */}
        <div className="text-[60px] font-semibold leading-[1.1] text-white mb-4">
          <span className="text-orange-500">Inst</span>
          <span className="text-orange-400">ant</span> Image{" "}
          <span className="text-orange-500">Compr</span>
          <span className="text-orange-400">ession</span>{" "}
          <span className="text-orange-400">&</span> Conversion.
        </div>
        {/* Subheading with gradient text effect */}
        <div className="text-[36px] font-semibold text-white mb-8">
          Get it done in a{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
            flick of second
          </span>
          .
        </div>
        <Button onClick={scrollToFeatures} />
      </div>
    </div>
  );
};
