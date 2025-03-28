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
  const [error, setError] = useState<string>("");

  const handleFileSelect = (selectedFile: File, previewUrl: string) => {
    const validTypes = ["image/png", "image/jpeg", "image/webp"];
    if (!validTypes.includes(selectedFile.type)) {
      setError(`Unsupported file type. Use PNG, JPG, or WebP.`);
      setFile(null);
      setPreview("");
      return;
    }
    setError(""); // Clear any previous error
    setFile(selectedFile);
    setPreview(previewUrl);
  };

  const handleConvert = async () => {
    if (!file) return;

    setIsProcessing(true);
    setError(""); // Reset error state

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/image/compress`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (res.ok && data.url) {
        localStorage.setItem("resultUrl", data.url);
        router.push("/compress/result");
      } else {
        setError(data.error || "Compression failed. Try again.");
      }
    } catch (error) {
      console.error("API call error:", error);
      setError("Something went wrong. Check your connection.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <div className="pt-20"></div>

      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Image Compression</h1>
        <p className="text-lg text-gray-300">
          Compress your image while maintaining quality.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {!file ? (
          <FileUpload onFileSelect={handleFileSelect} />
        ) : (
          <PreviewSection
            previewUrl={preview}
            onConvert={handleConvert}
            isProcessing={isProcessing}
            what="compress"
          />
        )}
      </div>
    </div>
  );
};

export default FeaturePage;