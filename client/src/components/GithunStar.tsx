"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const GitHubStarButton = () => {
  const [stars, setStars] = useState<number>(0);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const res = await fetch("https://api.github.com/repos/USERNAME/REPO");
        const data = await res.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Failed to fetch star count", error);
      }
    };

    fetchStars();
  }, []);

  return (
    <Link href="https://github.com/USERNAME/REPO" legacyBehavior>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full transition-all duration-300 shadow-lg hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(255,223,0,0.5)]"
      >
        <svg
          className="w-6 h-6 mr-2 fill-current"
          viewBox="0 0 16 16"
          version="1.1"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
            0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 
            1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
            0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 012.01-.27c.68 0 
            1.36.09 2.01.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 
            0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 
            8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
        <span className="mr-2">Star</span>
        <span>{stars}+</span>
      </a>
    </Link>
  );
};

export default GitHubStarButton;
