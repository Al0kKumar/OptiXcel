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
      const extension = resultUrl.split(".").pop(); // Default to "webp" if no extension
      const filename = `downloaded-image.${extension}`;

      saveAs(blob, filename);// Adjust filename as needed
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      {/* Spacer to offset fixed navbar */}
      <div className="pt-20"></div>
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-6">Your image is Ready!</h1>
        {resultUrl ? (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1.5rem", // ~24px gap
    }}
  >
    <img
      src={resultUrl}
      alt="Result"
      style={{
        width: "16rem", // 256px
        height: "16rem",
        objectFit: "cover",
        borderRadius: "0.5rem", // 8px
        border: "1px solid #E5E7EB", // similar to border-gray-200
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      }}
    />
    <button
      onClick={handleDownload}
      style={{
        padding: "0.75rem 2rem",
        borderRadius: "1rem",
        background: "linear-gradient(90deg, #F59E0B, #F97316)",
        color: "#FFFFFF",
        fontSize: "1.125rem",
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 0 40px 10px rgba(30,144,255,0.7)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      Download
    </button>
  </div>
) : (
  <p className="text-gray-300">Processing failed or no result available.</p>
)}

      </div>
    </div>
  );
};

export default ResultPage;