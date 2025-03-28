"use client";
import GitHubStarButton from "./GithunStar"; // Fix typo if it’s “GithubStar”
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-zinc-950 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            <Image src="/logo.png" alt="OptiXcel Logo" width={60} height={60} />
            <span className="ml-2 text-3xl text-white font-mono font-semibold">
              OptiXcel
            </span>
          </a>
        </Link>
        <GitHubStarButton />
      </div>
    </header>
  );
};

export default Navbar;
