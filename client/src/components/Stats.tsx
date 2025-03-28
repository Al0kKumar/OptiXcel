"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatsSectionProps {
  compressedCount: number;
  convertedCount: number;
}

const StatsSection: React.FC<StatsSectionProps> = ({ compressedCount, convertedCount }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <section ref={ref} className="py-16 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="text-5xl font-semibold text-white">
              {inView ? (
                <CountUp end={compressedCount} duration={2} separator="," suffix="+" />
              ) : (
                0
              )}
            </div>
            <p className="text-3xl  mt-2">
            <span className='text-orange-400'>Ima</span><span className='text-orange-500'>ges</span> Compressed
            </p>
          </div>
          <div>
            <div className="text-5xl font-semibold text-white">
              {inView ? (
                <CountUp end={convertedCount} duration={2} separator="," suffix="+" />
              ) : (
                0
              )}
            </div>
            <p className="text-3xl  mt-2">
              <span className='text-orange-400'>Ima</span><span className='text-orange-500'>ges</span> Converted
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;