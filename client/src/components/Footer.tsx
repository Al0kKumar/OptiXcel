"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const horizonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (horizonRef.current) {
        const scrollY = window.scrollY;
        const glowIntensity = Math.min(scrollY / 500, 1);
        horizonRef.current.style.boxShadow = `0 0 ${20 * glowIntensity}px ${10 * glowIntensity}px rgba(251, 146, 60, ${glowIntensity})`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-zinc-950 text-white py-12 relative overflow-hidden">
      {/* Horizon Line */}
      <div
        ref={horizonRef}
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 transition-all duration-300"
      />

      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-8">
        {/* Logo & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <Link href="/" legacyBehavior>
            <a className="flex items-center">
              <Image src="/logo.png" alt="OptiXcel Logo" width={60} height={60} />
              <span className="ml-2 text-3xl font-mono font-semibold text-orange-400">
                OptiXcel
              </span>
            </a>
          </Link>
          <p className="text-gray-300 text-lg mt-2">
            Instant Image Magic, Powered by Innovation
          </p>
        </motion.div>

        {/* Social Links */}
        <div className="flex gap-6">
          {[
            {
              name: "GitHub",
              url: "https://github.com/Al0kKumar",
              icon: (
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 012.01-.27c.68 0 1.36.09 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
              ),
            },
            {
              name: "Twitter",
              url: "https://x.com/Al0k_Mishra", // Replace with your Twitter
              icon: (
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578c-.9.535-1.897.922-2.958 1.13A4.66 4.66 0 0 0 16.487 3c-2.573 0-4.66 2.085-4.66 4.66 0 .367.042.725.12 1.066C7.78 8.54 4.14 6.54 1.678 3.67c-.4.685-.626 1.48-.626 2.34 0 1.616.823 3.043 2.07 3.878a4.64 4.64 0 0 1-2.11-.583v.058c0 2.257 1.605 4.14 3.737 4.568a4.67 4.67 0 0 1-2.103.08c.592 1.847 2.31 3.19 4.34 3.228a9.34 9.34 0 0 1-5.78 1.992c-.375 0-.747-.022-1.115-.066a13.19 13.19 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.602a9.47 9.47 0 0 0 2.322-2.41l-.002-.002z" />
                </svg>
              ),
            },
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/in/alok-kumar09/", // Replace with your LinkedIn
              icon: (
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.067 0-1.14.92-2.066 2.063-2.066 1.14 0 2.066.926 2.066 2.066 0 1.141-.926 2.067-2.066 2.067zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              name: "Email",
              url: "mishraalok189381@gmail.com", // Replace with your email
              icon: (
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              ),
            },
          ].map((social) => (
            <Link key={social.name} href={social.url} legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <span className="relative z-10">{social.icon}</span>
                <span className="absolute inset-0 rounded-full bg-orange-500 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
              </a>
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-gray-400 text-sm"
        >
          © {new Date().getFullYear()} OptiXcel. All rights reserved.
        </motion.p>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;