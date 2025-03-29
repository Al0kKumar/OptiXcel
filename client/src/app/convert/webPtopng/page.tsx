"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Nav";
import { FileUpload } from "@/components/Fileupload";
import { PreviewSection } from "@/components/Preview";

const FeaturePage = () => {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleFileSelect = (selectedFile: File, previewUrl: string) => {
    setFile(selectedFile);
    setPreview(previewUrl);
  };

  const handleConvert = async () => {
    if (!file) return;

    setIsProcessing(true);

    const formData = new FormData();
    formData.append("file", file);
    // Choose the target format based on your feature. Here, we hard-code "webp" as an example.
    formData.append("targetFormat", "png");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/image/convert`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.ok && data.url) {
        localStorage.setItem("resultUrl", data.url);
        router.push("/convert/webPtopng/result");
      } else {
        console.error("Conversion failed", data.error);
        // Optionally handle error in UI
      }
    } catch (error) {
      console.error("API call error:", error);
      // Optionally handle error in UI
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      {/* Spacer to offset fixed navbar */}
      <div className="pt-20"></div>

      {/* Top Section */}
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-2">WebP to PNG</h1>
        <p className="text-lg text-gray-300">
          Upload your image to convert from webp to png while maintaining quality.
        </p>
      </div>

      {/* File Upload or Preview Section */}
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        {!file ? (
          <FileUpload onFileSelect={handleFileSelect} />
        ) : (
          <PreviewSection previewUrl={preview} onConvert={handleConvert} isProcessing={isProcessing} what="convert" />
        )}
      </div>
    </div>
  );
};

export default FeaturePage;
