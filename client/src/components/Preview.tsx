// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// interface PreviewSectionProps {
//   previewUrl: string;
//   onConvert: () => void;
//   isProcessing: boolean;
//   what?: string;
// }

// export const PreviewSection = ({
//   previewUrl,
//   onConvert,
//   isProcessing,
//   what,
// }: PreviewSectionProps) => {
//   // Variants for the animated text letters
//   const containerVariants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const letterVariants = {
//     hidden: { opacity: 0, y: 10 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
//   };

//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center gap-8">
//       <div className="flex-1 text-center">
//         <img
//           src={previewUrl}
//           alt="Preview"
//           className="w-64 h-64 object-cover rounded-lg mx-auto border border-gray-200 shadow-md"
//         />
//       </div>
//       <div className="flex-1 text-center">
//         {isProcessing ? (
//           <div className="flex flex-col items-center">
//             <motion.div
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               className="flex space-x-1"
//             >
//               {"Processing...".split("").map((char, index) => (
//                 <motion.span
//                   key={index}
//                   variants={letterVariants}
//                   className="text-xl font-medium text-gray-300"
//                 >
//                   {char}
//                 </motion.span>
//               ))}
//             </motion.div>
//           </div>
//         ) : (
//           <button
//             onClick={onConvert}
//             className="px-8 py-3 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg font-semibold hover:scale-105 hover:shadow-[0_0_40px_10px_rgba(30,144,255,0.7)] transition-all duration-300 shadow-md"
//           >
//             {what === "convert" ? "Convert" : "Compress"}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };


"use client";
import React from "react";
import { motion } from "framer-motion";

interface PreviewSectionProps {
  previewUrl: string;
  onConvert: () => void;
  isProcessing: boolean;
  what?: string;
}

export const PreviewSection = ({ previewUrl, onConvert, isProcessing, what }: PreviewSectionProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="flex-1 text-center">
        <img
          src={previewUrl}
          alt="Preview"
          className="w-64 h-64 object-cover rounded-lg mx-auto border border-gray-200 shadow-md"
        />
      </div>
      <div className="flex-1 text-center">
        {isProcessing ? (
          <div className="flex flex-col items-center">
            <motion.div
              className="flex space-x-1"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {"Processing...".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                  }}
                  className="text-xl font-medium text-gray-300"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ) : (
          <button
            onClick={onConvert}
            className="px-8 py-3 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg font-semibold hover:scale-105 hover:shadow-[0_0_40px_10px_rgba(30,144,255,0.7)] transition-all duration-300 shadow-md"
          >
            {what === "convert" ? "Convert" : "Compress"}
          </button>
        )}
      </div>
    </div>
  );
};
