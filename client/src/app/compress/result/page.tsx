"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Nav";
import { saveAs } from "file-saver";

const ResultPage = () => {
  const [resultUrl, setResultUrl] = useState<string>("");

  useEffect(() => {
    const storedResult = localStorage.getItem("resultUrl");
    if (storedResult) {
      setResultUrl(storedResult);
    }
  }, []);

  const handleDownload = async () => {
    if (!resultUrl) return;

    try {
      const response = await fetch(resultUrl);
      if (!response.ok) throw new Error("Download failed");
      const blob = await response.blob();
      saveAs(blob, "compressed-image.png"); // Adjust filename as needed
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <div className="pt-20"></div>
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Your image is Ready!</h1>
        {resultUrl ? (
          <>
            <img src={resultUrl} alt="Result" className="max-w-md rounded-lg mb-4 inline-block" />
            <button
              onClick={handleDownload}
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-lg font-semibold hover:scale-105 hover:shadow-[0_0_40px_10px_rgba(30,144,255,0.7)] transition-all duration-300 shadow-md"
            >
              Download
            </button>
          </>
        ) : (
          <p className="text-gray-300">Processing failed or no result available.</p>
        )}
      </div>
    </div>
  );
};

export default ResultPage;