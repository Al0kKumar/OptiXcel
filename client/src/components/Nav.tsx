"use client";
import { useTheme } from "@/app/context/ThemeContext";
import GitHubStarButton from "./GithunStar";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header
      className={`fixed top-0 left-0 right-0 shadow-md z-50 transition-colors duration-300 ${
        isDarkMode ? "bg-zinc-950" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            <Image src="/logo.png" alt="OptiXcel Logo" width={60} height={60} />
            <span
              className={`ml-2 text-3xl font-mono font-semibold ${
                isDarkMode ? "text-white" : "text-zinc-950"
              }`}
            >
              OptiXcel
            </span>
          </a>
        </Link>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:scale-105 transition-transform duration-200"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
          <GitHubStarButton />
        </div>
      </div>
    </header>
  );
};

export default Navbar;


