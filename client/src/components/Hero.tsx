"use client";
import { Button } from "./Button";
import { motion } from "framer-motion";

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const wordVariants = {
  initial: { opacity: 0, y: -50, rotateX: -90 },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, type: "spring", stiffness: 100 },
  },
};

export const Hero = ({ scrollToFeatures }: { scrollToFeatures: () => void }) => {
  // Define your main heading words. Adjust the words and order as needed.
  const mainHeadingWords = [
    { text: "Instant", color: "text-orange-500" },
    { text: "Image", color: "text-white" },
    { text: "Compression", color: "text-orange-500" },
    { text: "&", color: "text-white" },
    { text: "Conversion.", color: "text-orange-400" },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-center text-center transform -translate-y-10">
        {/* Animated Main Heading */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="text-[60px] font-semibold leading-[1.1] text-white mb-4 flex flex-wrap justify-center"
        >
          {mainHeadingWords.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className={`mx-2 ${word.color}`}
            >
              {word.text}
            </motion.span>
          ))}
        </motion.div>
        {/* Animated Subheading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-[36px] font-semibold text-white mb-8"
        >
          Get it done in a{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
            flick of second
          </span>
          .
        </motion.div>
        <Button onClick={scrollToFeatures} />
      </div>
    </div>
  );
};
